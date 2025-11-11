package com.example.tutorial.api;

import com.example.tutorial.model.Player;
import com.example.tutorial.model.Scout;
import com.example.tutorial.service.PlayerService;
import com.example.tutorial.service.ScoutService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/scouts")
public class ScoutController
{
    private final ScoutService scoutService;
    private final PlayerService playerService;

    public ScoutController(ScoutService scoutService, PlayerService playerService)
    {
        this.scoutService = scoutService;
        this.playerService = playerService;
    }

    @GetMapping
    public List<Scout> getScouts()
    {
        return scoutService.getAllScouts();
    }

    @GetMapping("/{id}")
    public Scout getScout(@PathVariable String id)
    {
        return scoutService.getScoutById(id);
    }

    @GetMapping("/{id}/watchlist")
    public List<Player> getWatchlist(@PathVariable String id)
    {
        Scout scout = scoutService.getScoutById(id);
        return playerService.getPlayersByIds(scout.getTrackedPlayerIds());
    }

    @PostMapping
    public Scout createScout(@RequestBody Scout scout)
    {
        return scoutService.createScout(scout);
    }

    @PutMapping("/{id}")
    public Scout updateScout(@PathVariable String id, @RequestBody Scout scout)
    {
        return scoutService.updateScout(id, scout);
    }

    @DeleteMapping("/{id}")
    public void deleteScout(@PathVariable String id)
    {
        scoutService.deleteScout(id);
    }

    @PostMapping("/{id}/watchlist/{playerId}")
    public Scout addPlayerToWatchlist(@PathVariable String id, @PathVariable String playerId)
    {
        return scoutService.addPlayerToWatchlist(id, playerId);
    }

    @DeleteMapping("/{id}/watchlist/{playerId}")
    public Scout removePlayerFromWatchlist(@PathVariable String id, @PathVariable String playerId)
    {
        return scoutService.removePlayerFromWatchlist(id, playerId);
    }
}

