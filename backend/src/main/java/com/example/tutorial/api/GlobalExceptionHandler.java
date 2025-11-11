package com.example.tutorial.api;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@RestControllerAdvice
public class GlobalExceptionHandler
{
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NoSuchElementException.class)
    public Map<String, String> handleNotFound(NoSuchElementException exception)
    {
        Map<String, String> response = new HashMap<>();
        response.put("message", exception.getMessage());
        return response;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalArgumentException.class)
    public Map<String, String> handleBadRequest(IllegalArgumentException exception)
    {
        Map<String, String> response = new HashMap<>();
        response.put("message", exception.getMessage());
        return response;
    }

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(IllegalStateException.class)
    public Map<String, String> handleConflict(IllegalStateException exception)
    {
        Map<String, String> response = new HashMap<>();
        response.put("message", exception.getMessage());
        return response;
    }
}

