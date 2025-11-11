package com.example.tutorial.model;

import java.util.ArrayList;
import java.util.UUID;

public class Scout extends User
{
    private ArrayList<String> regions = new ArrayList<>();
    private ArrayList<String> trackedPlayerIds = new ArrayList<>();

    public Scout()
    {
        setType(UserType.SCOUT);
    }

    public Scout(String id, String name, String email, ArrayList<String> regions, ArrayList<String> trackedPlayerIds)
    {
        super(id, UserType.SCOUT, name, email);
        if (regions != null)
        {
            this.regions = regions;
        }
        if (trackedPlayerIds != null)
        {
            this.trackedPlayerIds = trackedPlayerIds;
        }
    }

    public Scout(String name, String email, ArrayList<String> regions, ArrayList<String> trackedPlayerIds)
    {
        super(UUID.randomUUID().toString(), UserType.SCOUT, name, email);
        if (regions != null)
        {
            this.regions = regions;
        }
        if (trackedPlayerIds != null)
        {
            this.trackedPlayerIds = trackedPlayerIds;
        }
    }

    public ArrayList<String> getRegions()
    {
        return regions;
    }

    public void setRegions(ArrayList<String> regions)
    {
        if (regions != null)
        {
            this.regions = regions;
        }
    }

    public ArrayList<String> getTrackedPlayerIds()
    {
        return trackedPlayerIds;
    }

    public void setTrackedPlayerIds(ArrayList<String> trackedPlayerIds)
    {
        if (trackedPlayerIds != null)
        {
            this.trackedPlayerIds = trackedPlayerIds;
        }
    }
}

