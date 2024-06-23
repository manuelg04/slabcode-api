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

markdown
Copy code
## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/your-username/project-api.git
   cd project-api
Instala las dependencias:

bash
Copy code
npm install
Variables de Entorno
Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:

env
Copy code
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
JWT_SECRET="your_jwt_secret"
PORT=5000
Migración y Seed de la Base de Datos
Ejecuta las migraciones de Prisma para configurar el esquema de la base de datos:

bash
Copy code
npx prisma migrate dev --name init
Genera el cliente de Prisma:

bash
Copy code
npx prisma generate
Población inicial de la base de datos:

bash
Copy code
npx prisma db seed
Ejecución de la Aplicación
Para iniciar la aplicación en modo de desarrollo, ejecuta:

bash
Copy code
npm run dev
El servidor estará ejecutándose en http://localhost:5000.

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.





