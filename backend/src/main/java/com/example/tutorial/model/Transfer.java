package com.example.tutorial.model;

import java.time.Instant;
import java.util.UUID;

public class Transfer
{
    private String id = UUID.randomUUID().toString();
    private String playerId;
    private String fromTeamId;
    private String toTeamId;
    private String requestedBy;
    private String notes;
    private String resolutionNote;
    private TransferStatus status = TransferStatus.PENDING;
    private Instant createdAt = Instant.now();
    private Instant updatedAt = Instant.now();

    public Transfer() {}

    public Transfer(String id, String playerId, String fromTeamId, String toTeamId, String requestedBy, String notes)
    {
        this.id = id;
        this.playerId = playerId;
        this.fromTeamId = fromTeamId;
        this.toTeamId = toTeamId;
        this.requestedBy = requestedBy;
        this.notes = notes;
    }

    public String getId()
    {
        return id;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getPlayerId()
    {
        return playerId;
    }

    public void setPlayerId(String playerId)
    {
        this.playerId = playerId;
    }

    public String getFromTeamId()
    {
        return fromTeamId;
    }

    public void setFromTeamId(String fromTeamId)
    {
        this.fromTeamId = fromTeamId;
    }

    public String getToTeamId()
    {
        return toTeamId;
    }

    public void setToTeamId(String toTeamId)
    {
        this.toTeamId = toTeamId;
    }

    public String getRequestedBy()
    {
        return requestedBy;
    }

    public void setRequestedBy(String requestedBy)
    {
        this.requestedBy = requestedBy;
    }

    public String getNotes()
    {
        return notes;
    }

    public void setNotes(String notes)
    {
        this.notes = notes;
    }

    public String getResolutionNote()
    {
        return resolutionNote;
    }

    public void setResolutionNote(String resolutionNote)
    {
        this.resolutionNote = resolutionNote;
    }

    public TransferStatus getStatus()
    {
        return status;
    }

    public void setStatus(TransferStatus status)
    {
        this.status = status;
    }

    public Instant getCreatedAt()
    {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt)
    {
        this.createdAt = createdAt;
    }

    public Instant getUpdatedAt()
    {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt)
    {
        this.updatedAt = updatedAt;
    }
}

