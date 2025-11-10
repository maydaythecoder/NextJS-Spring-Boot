#!/bin/bash
# Combined runner for Spring Boot + Next.js

# Exit immediately if any command fails
set -e

# Colors for readability
GREEN="\033[0;32m"
RED="\033[0;31m"
NC="\033[0m"

echo -e "${GREEN}Starting backend and frontend...${NC}"

# Run backend in background
(
  cd backend
  echo -e "${GREEN}[BACKEND] Running Spring Boot on :8080${NC}"
  ./mvnw spring-boot:run
) &

BACKEND_PID=$!

# Run frontend
(
  cd frontend
  echo -e "${GREEN}[FRONTEND] Running Next.js on :3000${NC}"
  npm run dev
) &

FRONTEND_PID=$!

# Trap CTRL+C (SIGINT) to kill both processes
trap "echo -e '\n${RED}Stopping servers...${NC}'; kill $BACKEND_PID $FRONTEND_PID; exit 0" SIGINT

# Wait for both to finish
wait
