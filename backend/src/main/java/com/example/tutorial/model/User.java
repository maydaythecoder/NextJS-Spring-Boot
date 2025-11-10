package com.example.tutorial.model;

import java.util.UUID;

/*
 * Represents a User in the system.
 * Plain Java object holding data only.
 * --------------------
 * Fields:
 *  - id: unique identifier
 *  - name: user's name
 *  - email: user's email address
 * Used by service and controller layers.
 */
public class User
{
    private UUID id;
    private String name;
    private String email;
    // Empty constructor (required by frameworks and JSON parsers)
    public User()
    {

    }
    // Constructor for creating User objects manually
    public User(UUID id, String name, String email)
    {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    // Getters/Setters allow controlled access to private fields
    public UUID getId()
    {
        return id;
    }
    public void setId(UUID id)
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
    public String getEmail()
    {
        return email;
    }
    public void setEmail(String email)
    {
        this.email = email;
    }
}
