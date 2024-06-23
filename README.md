# Project slabcode-api

This is a backend application built with Express, TypeScript, and PostgreSQL using Prisma as the ORM. It provides a RESTful API for managing projects and tasks with user authentication.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Migration and Seeding](#database-migration-and-seeding)
- [Running the Application](#running-the-application)
- [License](#license)

## Features

- User authentication with JWT
- Create, update, delete, and complete projects
- Create, update, delete, and complete tasks

## Requirements

- Node.js
- PostgreSQL

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-api.git
   cd project-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
JWT_SECRET="your_jwt_secret"
```

## Database Migration and Seeding

1. Run Prisma migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

2. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

3. Seed the database:
   ```bash
   npx prisma db seed
   ```

## Running the Application

To start the application in development mode, run:

```bash
npm run dev
```

The server will be running at `http://localhost:5000`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



