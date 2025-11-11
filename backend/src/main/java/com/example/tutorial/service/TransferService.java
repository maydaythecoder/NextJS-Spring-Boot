package com.example.tutorial.service;

import com.example.tutorial.model.Transfer;
import com.example.tutorial.model.TransferStatus;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Service
public class TransferService
{
    private final PlayerService playerService;
    private final TeamService teamService;
    private final ConcurrentMap<String, Transfer> transfers = new ConcurrentHashMap<>();

    public TransferService(PlayerService playerService, TeamService teamService)
    {
        this.playerService = playerService;
        this.teamService = teamService;
    }

    public List<Transfer> getAllTransfers()
    {
        return new ArrayList<>(transfers.values());
    }

    public Transfer getTransferById(String id)
    {
        Transfer transfer = transfers.get(id);
        if (transfer == null)
        {
            throw new NoSuchElementException("Transfer not found: " + id);
        }
        return transfer;
    }

    public Transfer createTransfer(Transfer transfer)
    {
        validateTransferRequest(transfer);
        if (transfer.getId() == null || transfer.getId().isBlank())
        {
            transfer.setId(UUID.randomUUID().toString());
        }
        Instant now = Instant.now();
        transfer.setStatus(TransferStatus.PENDING);
        transfer.setCreatedAt(now);
        transfer.setUpdatedAt(now);
        transfers.put(transfer.getId(), transfer);
        return transfer;
    }

    public Transfer approveTransfer(String id, String approvalNote)
    {
        Transfer transfer = getTransferById(id);
        if (transfer.getStatus() != TransferStatus.PENDING)
        {
            throw new IllegalStateException("Transfer already resolved: " + id);
        }
        if (transfer.getFromTeamId() != null && !transfer.getFromTeamId().isBlank())
        {
            if (teamService.teamHasPlayer(transfer.getFromTeamId(), transfer.getPlayerId()))
            {
                teamService.removePlayerFromTeam(transfer.getFromTeamId(), transfer.getPlayerId());
            }
        }
        teamService.addPlayerToTeam(transfer.getToTeamId(), transfer.getPlayerId());
        transfer.setStatus(TransferStatus.APPROVED);
        transfer.setResolutionNote(approvalNote);
        transfer.setUpdatedAt(Instant.now());
        transfers.put(transfer.getId(), transfer);
        return transfer;
    }

    public Transfer rejectTransfer(String id, String rejectionNote)
    {
        Transfer transfer = getTransferById(id);
        if (transfer.getStatus() != TransferStatus.PENDING)
        {
            throw new IllegalStateException("Transfer already resolved: " + id);
        }
        transfer.setStatus(TransferStatus.REJECTED);
        transfer.setResolutionNote(rejectionNote);
        transfer.setUpdatedAt(Instant.now());
        transfers.put(transfer.getId(), transfer);
        return transfer;
    }

    private void validateTransferRequest(Transfer transfer)
    {
        if (transfer.getPlayerId() == null || transfer.getPlayerId().isBlank())
        {
            throw new IllegalArgumentException("playerId is required");
        }
        if (transfer.getToTeamId() == null || transfer.getToTeamId().isBlank())
        {
            throw new IllegalArgumentException("toTeamId is required");
        }
        playerService.getPlayerById(transfer.getPlayerId());
        teamService.getTeamById(transfer.getToTeamId());
        if (transfer.getFromTeamId() != null && !transfer.getFromTeamId().isBlank())
        {
            if (!teamService.teamHasPlayer(transfer.getFromTeamId(), transfer.getPlayerId()))
            {
                throw new IllegalStateException("Player " + transfer.getPlayerId() + " is not registered with team " + transfer.getFromTeamId());
            }
        }
    }
}

