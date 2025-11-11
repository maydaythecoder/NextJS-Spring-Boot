package com.example.tutorial.repository;

import com.example.tutorial.model.Player;
import com.example.tutorial.model.Scout;
import com.example.tutorial.model.Team;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;

@Repository
public class JsonDataRepository
{
    private static final String PLAYERS_PATH = "data/players.json";
    private static final String TEAMS_PATH = "data/teams.json";
    private static final String SCOUTS_PATH = "data/scouts.json";

    private final ObjectMapper objectMapper;
    private final Map<String, Player> players = new ConcurrentHashMap<>();
    private final Map<String, Team> teams = new ConcurrentHashMap<>();
    private final Map<String, Scout> scouts = new ConcurrentHashMap<>();

    public JsonDataRepository(ObjectMapper objectMapper)
    {
        this.objectMapper = objectMapper;
    }

    @PostConstruct
    public void loadData()
    {
        index(readList(PLAYERS_PATH, new TypeReference<List<Player>>() {}), Player::getId, players);
        index(readList(TEAMS_PATH, new TypeReference<List<Team>>() {}), Team::getId, teams);
        index(readList(SCOUTS_PATH, new TypeReference<List<Scout>>() {}), Scout::getId, scouts);
    }

    public Collection<Player> findAllPlayers()
    {
        return players.values();
    }

    public Optional<Player> findPlayerById(String id)
    {
        return Optional.ofNullable(players.get(id));
    }

    public Player upsertPlayer(Player player)
    {
        Objects.requireNonNull(player, "player must not be null");
        Objects.requireNonNull(player.getId(), "player id must not be null");
        players.put(player.getId(), player);
        return player;
    }

    public void deletePlayer(String playerId)
    {
        players.remove(playerId);
    }

    public Collection<Team> findAllTeams()
    {
        return teams.values();
    }

    public Optional<Team> findTeamById(String id)
    {
        return Optional.ofNullable(teams.get(id));
    }

    public Team upsertTeam(Team team)
    {
        Objects.requireNonNull(team, "team must not be null");
        Objects.requireNonNull(team.getId(), "team id must not be null");
        teams.put(team.getId(), team);
        return team;
    }

    public void deleteTeam(String teamId)
    {
        teams.remove(teamId);
    }

    public Collection<Scout> findAllScouts()
    {
        return scouts.values();
    }

    public Optional<Scout> findScoutById(String id)
    {
        return Optional.ofNullable(scouts.get(id));
    }

    public Scout upsertScout(Scout scout)
    {
        Objects.requireNonNull(scout, "scout must not be null");
        Objects.requireNonNull(scout.getId(), "scout id must not be null");
        scouts.put(scout.getId(), scout);
        return scout;
    }

    public void deleteScout(String scoutId)
    {
        scouts.remove(scoutId);
    }

    private <T> List<T> readList(String path, TypeReference<List<T>> typeReference)
    {
        try (InputStream inputStream = new ClassPathResource(path).getInputStream())
        {
            return objectMapper.readValue(inputStream, typeReference);
        }
        catch (IOException exception)
        {
            throw new IllegalStateException("Failed to load data from " + path, exception);
        }
    }

    private <T> void index(List<T> items, Function<T, String> idExtractor, Map<String, T> store)
    {
        store.clear();
        if (items == null)
        {
            return;
        }
        for (T item : items)
        {
            if (item == null)
            {
                continue;
            }
            String id = idExtractor.apply(item);
            if (id != null && !id.isBlank())
            {
                store.put(id, item);
            }
        }
    }
}

