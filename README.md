# Scheduler API

This is a dummy project that we have composed for demonstration purposes.

## Tech Stack:
- Typescript
- Node.js
- Express.js
- MongoDB

## Setup Instructions

### Option 1: Using Docker (Recommended)
1. Install Docker and Docker Compose
2. Run `docker compose -f docker-compose.dev.yml up` to start the application
3. The server will be running at `http://localhost:3000`
4. MongoDB will be available at `mongodb://localhost:27017/scheduler`

To stop the containers, run:
```bash
docker compose -f docker-compose.dev.yml down
```

To rebuild the containers after code changes:
```bash
docker compose -f docker-compose.dev.yml up --build
```

### Option 2: Local Setup
1. Install Node 22+
2. Install MongoDB 6+
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server
5. The server will be running at `http://localhost:3000`

## Repository Features

1. Automatic Deployment with Heroku
2. Review Apps for every PR
3. Linting with ESLint
4. Static Security Analysis with Snyk
5. Unit Tests with Jest
6. Dependabot for Dependency Management


