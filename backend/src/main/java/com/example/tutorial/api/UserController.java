package com.example.tutorial.api;

import com.example.tutorial.model.User;
import com.example.tutorial.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

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
    public User getUser(@PathVariable String id)
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
    public User updateUser(@PathVariable String id, @RequestBody User updatedUser)
    {
        User existingUser = userService.getUserById(id);
        if (existingUser == null)
        {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found: " + id);
        }
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
    public void deleteUser(@PathVariable String id)
    {
        userService.deleteUser(id);
    }
}
