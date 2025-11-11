package com.example.tutorial.model;

import java.util.HashMap;
import java.util.UUID;

public class Player
{
    private String id = UUID.randomUUID().toString();
    private String name;
    private Position position;
    private HashMap<StatName, StatValue> stats = new HashMap<>();

    public Player() {}

    public Player(String id, String name, Position position, HashMap<StatName, StatValue> stats)
    {
        this.id = id;
        this.name = name;
        this.position = position;
        if (stats != null)
        {
            this.stats = stats;
        }
    }

    public Player(String name, Position position, HashMap<StatName, StatValue> stats)
    {
        this.name = name;
        this.position = position;
        if (stats != null)
        {
            this.stats = stats;
        }
    }

    public String getId()
    {
        return id;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Position getPosition()
    {
        return position;
    }

    public void setPosition(Position position)
    {
        this.position = position;
    }

    public HashMap<StatName, StatValue> getStats()
    {
        return stats;
    }

    public void setStats(HashMap<StatName, StatValue> stats)
    {
        this.stats = stats;
    }
}
