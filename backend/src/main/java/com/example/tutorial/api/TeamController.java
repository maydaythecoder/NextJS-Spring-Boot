package com.example.tutorial.api;

import com.example.tutorial.model.Player;
import com.example.tutorial.model.Team;
import com.example.tutorial.service.TeamService;
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
@RequestMapping("/teams")
public class TeamController
{
    private final TeamService teamService;

    public TeamController(TeamService teamService)
    {
        this.teamService = teamService;
    }

    @GetMapping
    public List<Team> getTeams()
    {
        return teamService.getAllTeams();
    }

    @GetMapping("/{id}")
    public Team getTeam(@PathVariable String id)
    {
        return teamService.getTeamById(id);
    }

    @GetMapping("/{id}/players")
    public List<Player> getTeamPlayers(@PathVariable String id)
    {
        return teamService.getPlayersForTeam(id);
    }

    @PostMapping
    public Team createTeam(@RequestBody Team team)
    {
        return teamService.createTeam(team);
    }

    @PutMapping("/{id}")
    public Team updateTeam(@PathVariable String id, @RequestBody Team team)
    {
        return teamService.updateTeam(id, team);
    }

    @DeleteMapping("/{id}")
    public void deleteTeam(@PathVariable String id)
    {
        teamService.deleteTeam(id);
    }

    @PostMapping("/{teamId}/players/{playerId}")
    public Team addPlayerToTeam(@PathVariable String teamId, @PathVariable String playerId)
    {
        return teamService.addPlayerToTeam(teamId, playerId);
    }

    @DeleteMapping("/{teamId}/players/{playerId}")
    public Team removePlayerFromTeam(@PathVariable String teamId, @PathVariable String playerId)
    {
        return teamService.removePlayerFromTeam(teamId, playerId);
    }
}

