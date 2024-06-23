# Project API

This is a backend application built with Express, TypeScript, and PostgreSQL using Prisma as the ORM. It provides a RESTful API for managing projects and tasks with user authentication.

## Table of Contents

- [Project API](#project-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Migration and Seeding](#database-migration-and-seeding)
  - [Running the Application](#running-the-application)
  - [Endpoints](#endpoints)
    - [Auth](#auth)
    - [Projects](#projects)
    - [Tasks](#tasks)
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
2. Install dependencies
npm install

# Environment Variables
Create a .env file in the root of the project and add the following environment variables:
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
JWT_SECRET="your_jwt_secret"

## Database Migration and Seeding

1. Run the Prisma migrations to set up the database schema:
npx prisma migrate dev --name init
2. Generate Prisma client:
npx prisma generate
3. Seed the database with initial data:
npx prisma db seed

## Running the Application
To start the application in development mode, run:
npm run dev
The server will be running on http://localhost:5000.

# License
This project is licensed under the MIT License. See the LICENSE file for details





