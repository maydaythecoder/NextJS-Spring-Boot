package com.example.tutorial.service;

import com.example.tutorial.model.User;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/*
 * Handles the business logic and data storage for User objects.
 * --------------------
 * Responsibilities:
 *  - Manage User data (create, fetch, delete).
 *  - Act as a layer between controller (API) and data (DB or in-memory).
 *
 * Here we use a simple in-memory Map to simulate a database.
 */
@Service
public class UserService
{
    private final Map<String, User> users = new HashMap<>();

    /*
     * Get all users currently stored.
     * Input: none
     * Output: List<User>
     */
    public List<User> getAllUsers()
    {
        return new ArrayList<>(users.values());
    }

    /*
     * Fetch one user by ID.
     * Input: user ID (Long)
     * Output: User object or null if not found
     */
    public User getUserById(String id)
    {
        return users.get(id);
    }

    /*
     * Create and store a new user.
     * Input: User object without ID
     * Output: User object with generated ID
     */
    public User createUser(User user)
    {
        if (user.getId() == null || user.getId().isBlank())
        {
            user.setId(UUID.randomUUID().toString());
        }
        users.put(user.getId(), user);
        return user;
    }

    /*
     * Delete a user by ID.
     * Input: user ID (Long)
     * Output: none
     */
    public void deleteUser(String id)
    {
        users.remove(id);
    }
}
