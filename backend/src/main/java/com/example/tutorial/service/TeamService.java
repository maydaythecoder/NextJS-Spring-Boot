package com.example.tutorial.service;

import com.example.tutorial.model.Player;
import com.example.tutorial.model.Team;
import com.example.tutorial.repository.JsonDataRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.UUID;

@Service
public class TeamService
{
    private final JsonDataRepository repository;
    private final PlayerService playerService;

    public TeamService(JsonDataRepository repository, PlayerService playerService)
    {
        this.repository = repository;
        this.playerService = playerService;
    }

    public List<Team> getAllTeams()
    {
        return new ArrayList<>(repository.findAllTeams());
    }

    public Team getTeamById(String id)
    {
        return repository.findTeamById(id)
            .orElseThrow(() -> new NoSuchElementException("Team not found: " + id));
    }

    public Team createTeam(Team team)
    {
        if (team.getId() == null || team.getId().isBlank())
        {
            team.setId(UUID.randomUUID().toString());
        }
        sanitizePlayerIds(team);
        repository.upsertTeam(team);
        return team;
    }

    public Team updateTeam(String id, Team updatedTeam)
    {
        Team existingTeam = getTeamById(id);
        existingTeam.setName(updatedTeam.getName());
        existingTeam.setManager(updatedTeam.getManager());
        if (updatedTeam.getPlayerIds() != null)
        {
            existingTeam.setPlayerIds(new ArrayList<>(new LinkedHashSet<>(updatedTeam.getPlayerIds())));
            sanitizePlayerIds(existingTeam);
        }
        repository.upsertTeam(existingTeam);
        return existingTeam;
    }

    public void deleteTeam(String id)
    {
        repository.deleteTeam(id);
    }

    public Team addPlayerToTeam(String teamId, String playerId)
    {
        Team team = getTeamById(teamId);
        playerService.getPlayerById(playerId);
        ArrayList<String> playerIds = team.getPlayerIds();
        if (!playerIds.contains(playerId))
        {
            playerIds.add(playerId);
            repository.upsertTeam(team);
        }
        return team;
    }

    public Team removePlayerFromTeam(String teamId, String playerId)
    {
        Team team = getTeamById(teamId);
        ArrayList<String> playerIds = team.getPlayerIds();
        if (playerIds.remove(playerId))
        {
            repository.upsertTeam(team);
        }
        return team;
    }

    public boolean teamHasPlayer(String teamId, String playerId)
    {
        Team team = getTeamById(teamId);
        return team.getPlayerIds().contains(playerId);
    }

    public List<Player> getPlayersForTeam(String teamId)
    {
        Team team = getTeamById(teamId);
        return playerService.getPlayersByIds(team.getPlayerIds());
    }

    private void sanitizePlayerIds(Team team)
    {
        ArrayList<String> playerIds = team.getPlayerIds();
        if (playerIds == null)
        {
            team.setPlayerIds(new ArrayList<>());
            return;
        }
        Set<String> deduplicated = new LinkedHashSet<>(playerIds);
        for (String playerId : deduplicated)
        {
            playerService.getPlayerById(playerId);
        }
        team.setPlayerIds(new ArrayList<>(deduplicated));
    }
}

