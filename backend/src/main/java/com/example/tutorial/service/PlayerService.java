package com.example.tutorial.service;

import com.example.tutorial.model.Player;
import com.example.tutorial.model.Position;
import com.example.tutorial.repository.JsonDataRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class PlayerService
{
    private final JsonDataRepository repository;

    public PlayerService(JsonDataRepository repository)
    {
        this.repository = repository;
    }

    public List<Player> getAllPlayers()
    {
        return new ArrayList<>(repository.findAllPlayers());
    }

    public Player getPlayerById(String id)
    {
        return repository.findPlayerById(id)
            .orElseThrow(() -> new NoSuchElementException("Player not found: " + id));
    }

    public List<Player> getPlayersByIds(Collection<String> playerIds)
    {
        if (playerIds == null)
        {
            return List.of();
        }
        return playerIds.stream()
            .map(repository::findPlayerById)
            .filter(java.util.Optional::isPresent)
            .map(java.util.Optional::get)
            .collect(Collectors.toList());
    }

    public List<Player> findByPosition(Position position)
    {
        return repository.findAllPlayers().stream()
            .filter(player -> player.getPosition() == position)
            .collect(Collectors.toList());
    }

    public List<Player> searchByName(String nameFragment)
    {
        if (nameFragment == null || nameFragment.isBlank())
        {
            return getAllPlayers();
        }
        String normalized = nameFragment.toLowerCase();
        return repository.findAllPlayers().stream()
            .filter(player -> player.getName() != null && player.getName().toLowerCase().contains(normalized))
            .collect(Collectors.toList());
    }

    public Player createPlayer(Player player)
    {
        if (player.getId() == null || player.getId().isBlank())
        {
            player.setId(UUID.randomUUID().toString());
        }
        repository.upsertPlayer(player);
        return player;
    }

    public Player updatePlayer(String id, Player updatedPlayer)
    {
        Player existingPlayer = getPlayerById(id);
        existingPlayer.setName(updatedPlayer.getName());
        existingPlayer.setPosition(updatedPlayer.getPosition());
        if (updatedPlayer.getStats() != null)
        {
            existingPlayer.setStats(updatedPlayer.getStats());
        }
        repository.upsertPlayer(existingPlayer);
        return existingPlayer;
    }

    public void deletePlayer(String id)
    {
        repository.deletePlayer(id);
    }
}

