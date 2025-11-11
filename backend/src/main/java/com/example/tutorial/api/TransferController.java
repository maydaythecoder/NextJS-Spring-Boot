package com.example.tutorial.api;

import com.example.tutorial.api.dto.TransferDecisionPayload;
import com.example.tutorial.api.dto.TransferRequestPayload;
import com.example.tutorial.model.Transfer;
import com.example.tutorial.model.TransferStatus;
import com.example.tutorial.service.TransferService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/transfers")
public class TransferController
{
    private final TransferService transferService;

    public TransferController(TransferService transferService)
    {
        this.transferService = transferService;
    }

    @GetMapping
    public List<Transfer> getTransfers(@RequestParam(value = "status", required = false) String status)
    {
        List<Transfer> transfers = transferService.getAllTransfers();
        if (status == null || status.isBlank())
        {
            return transfers;
        }
        TransferStatus requestedStatus = TransferStatus.valueOf(status.toUpperCase(Locale.ROOT));
        return transfers.stream()
            .filter(transfer -> transfer.getStatus() == requestedStatus)
            .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public Transfer getTransfer(@PathVariable String id)
    {
        return transferService.getTransferById(id);
    }

    @PostMapping
    public Transfer requestTransfer(@Valid @RequestBody TransferRequestPayload payload)
    {
        Transfer transfer = new Transfer();
        transfer.setPlayerId(payload.getPlayerId());
        transfer.setFromTeamId(payload.getFromTeamId());
        transfer.setToTeamId(payload.getToTeamId());
        transfer.setRequestedBy(payload.getRequestedBy());
        transfer.setNotes(payload.getNotes());
        return transferService.createTransfer(transfer);
    }

    @PostMapping("/{id}/approve")
    public Transfer approveTransfer(@PathVariable String id, @RequestBody(required = false) TransferDecisionPayload payload)
    {
        String note = payload != null ? payload.getNote() : null;
        return transferService.approveTransfer(id, note);
    }

    @PostMapping("/{id}/reject")
    public Transfer rejectTransfer(@PathVariable String id, @RequestBody(required = false) TransferDecisionPayload payload)
    {
        String note = payload != null ? payload.getNote() : null;
        return transferService.rejectTransfer(id, note);
    }
}

