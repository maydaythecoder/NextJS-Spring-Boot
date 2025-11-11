package com.example.tutorial.model;

import java.util.ArrayList;
import java.util.UUID;

public class Team {

    private String id = UUID.randomUUID().toString();
    private String name;
    private String manager;
    private ArrayList<String> playerIds = new ArrayList<>();

    public Team() {}

    public Team(String id, String name, String manager, ArrayList<String> playerIds)
    {
        this.id = id;
        this.name = name;
        this.manager = manager;
        if (playerIds != null)
        {
            this.playerIds = playerIds;
        }
    }

    public Team(String name, String manager, ArrayList<String> playerIds)
    {
        this.name = name;
        this.manager = manager;
        if (playerIds != null)
        {
            this.playerIds = playerIds;
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

    public String getManager()
    {
        return manager;
    }

    public void setManager(String manager)
    {
        this.manager = manager;
    }

    public ArrayList<String> getPlayerIds()
    {
        return playerIds;
    }

    public void setPlayerIds(ArrayList<String> playerIds)
    {
        if (playerIds != null)
        {
            this.playerIds = playerIds;
        }
    }
}
