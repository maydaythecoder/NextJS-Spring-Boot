package com.example.tutorial.service;

import com.example.tutorial.model.Scout;
import com.example.tutorial.model.UserType;
import com.example.tutorial.repository.JsonDataRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.UUID;

@Service
public class ScoutService
{
    private final JsonDataRepository repository;
    private final PlayerService playerService;

    public ScoutService(JsonDataRepository repository, PlayerService playerService)
    {
        this.repository = repository;
        this.playerService = playerService;
    }

    public List<Scout> getAllScouts()
    {
        return new ArrayList<>(repository.findAllScouts());
    }

    public Scout getScoutById(String id)
    {
        return repository.findScoutById(id)
            .orElseThrow(() -> new NoSuchElementException("Scout not found: " + id));
    }

    public Scout createScout(Scout scout)
    {
        if (scout.getId() == null || scout.getId().isBlank())
        {
            scout.setId(UUID.randomUUID().toString());
        }
        scout.setType(UserType.SCOUT);
        sanitizeRegions(scout);
        sanitizeWatchlist(scout);
        repository.upsertScout(scout);
        return scout;
    }

    public Scout updateScout(String id, Scout updatedScout)
    {
        Scout existingScout = getScoutById(id);
        existingScout.setName(updatedScout.getName());
        existingScout.setEmail(updatedScout.getEmail());
        if (updatedScout.getRegions() != null)
        {
            existingScout.setRegions(new ArrayList<>(new LinkedHashSet<>(updatedScout.getRegions())));
        }
        if (updatedScout.getTrackedPlayerIds() != null)
        {
            existingScout.setTrackedPlayerIds(new ArrayList<>(new LinkedHashSet<>(updatedScout.getTrackedPlayerIds())));
        }
        existingScout.setType(UserType.SCOUT);
        sanitizeRegions(existingScout);
        sanitizeWatchlist(existingScout);
        repository.upsertScout(existingScout);
        return existingScout;
    }

    public void deleteScout(String id)
    {
        repository.deleteScout(id);
    }

    public Scout addPlayerToWatchlist(String scoutId, String playerId)
    {
        Scout scout = getScoutById(scoutId);
        playerService.getPlayerById(playerId);
        ArrayList<String> trackedPlayers = scout.getTrackedPlayerIds();
        if (!trackedPlayers.contains(playerId))
        {
            trackedPlayers.add(playerId);
            repository.upsertScout(scout);
        }
        return scout;
    }

    public Scout removePlayerFromWatchlist(String scoutId, String playerId)
    {
        Scout scout = getScoutById(scoutId);
        ArrayList<String> trackedPlayers = scout.getTrackedPlayerIds();
        if (trackedPlayers.remove(playerId))
        {
            repository.upsertScout(scout);
        }
        return scout;
    }

    private void sanitizeRegions(Scout scout)
    {
        ArrayList<String> regions = scout.getRegions();
        if (regions == null)
        {
            scout.setRegions(new ArrayList<>());
            return;
        }
        Set<String> deduplicated = new LinkedHashSet<>(regions);
        scout.setRegions(new ArrayList<>(deduplicated));
    }

    private void sanitizeWatchlist(Scout scout)
    {
        ArrayList<String> trackedPlayerIds = scout.getTrackedPlayerIds();
        if (trackedPlayerIds == null)
        {
            scout.setTrackedPlayerIds(new ArrayList<>());
            return;
        }
        Set<String> deduplicated = new LinkedHashSet<>(trackedPlayerIds);
        for (String playerId : deduplicated)
        {
            playerService.getPlayerById(playerId);
        }
        scout.setTrackedPlayerIds(new ArrayList<>(deduplicated));
    }
}

