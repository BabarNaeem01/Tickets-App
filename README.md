# Tickets App

Simple event ticket viewer built with React Native, Expo, Node.js, Express, and MySQL.

This project shows my ability to build an end-to-end application that serves real data from a database to a mobile client through a clean REST API.

## Why This Project Matters

- Built a complete frontend + backend + database setup
- Exposed ticket data through a focused Express endpoint
- Connected a mobile app to a live backend service
- Kept the implementation simple, readable, and practical

## Project Structure

- `tickets-frontend` - Expo React Native mobile UI
- `tickets-backend` - Express and MySQL API layer
- `db/schema.sql` - MySQL schema and seed data

## What It Does

- Reads ticket records from MySQL
- Exposes them through `GET /tickets`
- Displays event name, booked user, and seat number in the mobile app

## API

- Port: `4002`
- Endpoint: `GET /tickets`

## Tech Stack

- Frontend: React Native, Expo
- Backend: Node.js, Express
- Database: MySQL
- Connection layer: `mysql2`

## Run It

1. Import `db/schema.sql` into MySQL
2. Add database values in `tickets-backend/.env`
3. Start backend from `tickets-backend`
4. Start frontend from `tickets-frontend`

## Recruiter Note

This project shows the kind of value I bring: I can take a simple product idea, build the full stack, and keep the code organized enough for a team to trust and extend.
