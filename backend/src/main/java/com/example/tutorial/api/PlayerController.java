package com.example.tutorial.api;

import com.example.tutorial.model.Player;
import com.example.tutorial.model.Position;
import com.example.tutorial.service.PlayerService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/players")
@Validated
public class PlayerController
{
    private final PlayerService playerService;

    public PlayerController(PlayerService playerService)
    {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getPlayers(@RequestParam(value = "position", required = false) String position,
                                   @RequestParam(value = "q", required = false) String nameQuery)
    {
        if (position != null && !position.isBlank())
        {
            Position requestedPosition = Position.valueOf(position.toUpperCase());
            return playerService.findByPosition(requestedPosition);
        }
        if (nameQuery != null && !nameQuery.isBlank())
        {
            return playerService.searchByName(nameQuery);
        }
        return playerService.getAllPlayers();
    }

    @GetMapping("/{id}")
    public Player getPlayer(@PathVariable String id)
    {
        return playerService.getPlayerById(id);
    }

    @PostMapping
    public Player createPlayer(@RequestBody Player player)
    {
        return playerService.createPlayer(player);
    }

    @PutMapping("/{id}")
    public Player updatePlayer(@PathVariable String id, @RequestBody Player player)
    {
        return playerService.updatePlayer(id, player);
    }

    @DeleteMapping("/{id}")
    public void deletePlayer(@PathVariable String id)
    {
        playerService.deletePlayer(id);
    }
}

