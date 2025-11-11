package com.example.tutorial.api.dto;

import jakarta.validation.constraints.NotBlank;

public class TransferRequestPayload
{
    @NotBlank
    private String playerId;

    private String fromTeamId;

    @NotBlank
    private String toTeamId;

    @NotBlank
    private String requestedBy;

    private String notes;

    public TransferRequestPayload() {}

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
}

