package com.example.tutorial.api;

import com.example.tutorial.model.User;
import com.example.tutorial.service.UserService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

/*
 * Handles HTTP requests for User operations.
 * --------------------
 * Responsibilities:
 *  - Receive HTTP requests (GET, POST, DELETE)
 *  - Call UserService to perform logic
 *  - Return JSON responses to client
 *
 * URL base: /users
 */
@RestController
@RequestMapping("/users")
public class UserController
{
    private final UserService userService;

    // Constructor injection of the service layer
    public UserController(UserService userService)
    {
        this.userService = userService;
    }

    /*
     * GET /users
     * --------------------
     * Purpose: Retrieve all users.
     * Input: none
     * Output: JSON array of User objects.
     */
    @GetMapping
    public List<User> getAllUsers()
    {
        return userService.getAllUsers();
    }

    /*
     * GET /users/{id}
     * --------------------
     * Purpose: Retrieve a single user by ID.
     * Input: user ID from URL path
     * Output: JSON representation of a User.
     */
    @GetMapping("/{id}")
    public User getUser(@PathVariable UUID id)
    {
        return userService.getUserById(id);
    }


    /*
     * POST /users
     * --------------------
     * Purpose: Create a new user.
     * Input: JSON object with name and email
     * Output: JSON object of created user (includes generated ID)
     */
    @PostMapping
    public User createUser(@RequestBody User user)
    {
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable UUID id, @RequestBody User updatedUser)
    {
        User existingUser = userService.getUserById(id);
        if (existingUser == null) return null;
        existingUser.setName(updatedUser.getName());
        existingUser.setEmail(updatedUser.getEmail());
        return existingUser;
    }


    /*
     * DELETE /users/{id}
     * --------------------
     * Purpose: Delete a user by ID.
     * Input: user ID from URL path
     * Output: none (HTTP 200 OK if success)
     */
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable UUID id)
    {
        userService.deleteUser(id);
    }
}
