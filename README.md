# IsraelHayom Carousel Task

This repository contains a home task project for israelHayom. The project demonstrates a custom carousel design using **Next.js** and **SwiperJS** on the frontend and a **NestJS**-powered backend with MongoDB.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Client (Next.js)](#client-nextjs)
- [Server (NestJS)](#server-nestjs)
- [Configuration & Ports](#configuration--ports)
- [Database Parameters](#database-parameters)
- [Prerequisites](#prerequisites)
- [How to Run the Project](#how-to-run-the-project)
- [Additional Notes](#additional-notes)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project was created as a home task for israelHayom. It showcases:

- A custom carousel using [SwiperJS](https://swiperjs.com/) with custom navigation buttons.
- A responsive design where the navigation buttons are hidden on screens ≤ 640px and positioned outside the carousel container for improved usability.
- The usage of React's `useCallback` hook to cache function definitions used for navigation button handlers.
- A NestJS backend that manages two MongoDB collections: **Posts** and **Writers**. The backend includes seeding functionality and an advanced aggregation pipeline for data retrieval.

## Project Structure

- **client**: Contains the Next.js application.
  - Implements the carousel using SwiperJS with custom navigation buttons.
  - Uses the `useCallback` hook to cache navigation button function definitions.
  - **Docker Configuration**: Includes its own `Dockerfile` and `docker-compose.yml` for containerizing the client.
- **server**: Contains the NestJS backend.
  - **Posts Collection**:
    - **Properties**: `title`, `createdAt`, `postUrl`, `writer`
    - The `writer` field is a reference to the **Writers** collection.
  - **Writers Collection**:
    - **Properties**: `_id`, `name`, `imageUrl`, `pageUrl`
  - **Common Functions in Both Models**:
    - `count`: Checks if seeding is necessary.
    - `create`: Seeds the database at the start of the application.
    - `findAll`: Retrieves data. In the Posts model, this function uses an aggregation pipeline to:
      - Group posts by writer ID.
      - Sort each group by `createdAt` in descending order.
      - Join the corresponding writer’s data from the Writers collection.
  - **Seeder Service**:
    - Seeds the database using data from two JSON files.
  - **Docker Configuration**: Contains its own `Dockerfile` and `docker-compose.yml` for containerizing the server.
- **Root-Level Docker Configuration**:
  - A root-level `docker-compose.yml` orchestrates both the client and server services along with a MongoDB service, enabling a unified development and deployment environment.

## Client (Next.js)

- **Carousel Implementation**:
  - Utilizes SwiperJS to create a carousel.
  - Implements custom navigation buttons that are hidden on screens ≤ 640px.
  - Positions the navigation buttons outside the carousel container.
  - Uses the `useCallback` hook to cache navigation button handler functions.

## Server (NestJS)

- **Data Models**:
  - **Posts**:
    - **Properties**: `title`, `createdAt`, `postUrl`, `writer` (reference to a writer)
  - **Writers**:
    - **Properties**: `_id`, `name`, `imageUrl`, `pageUrl`
- **Services**:
  - **Seeding Functions**:
    - `count`: Determines if seeding is necessary.
    - `create`: Seeds the database.
  - **Data Retrieval**:
    - The Posts model’s `findAll` service uses an aggregation pipeline to group posts by writer, sort them by creation date in descending order, and attach the corresponding writer data.

## Configuration & Ports

Before running the project, ensure the following ports are available or adjust them in the `docker-compose.yml` file:

- **Port 3000 (Client)**:
  - Used by the Next.js application.
  - **Note**: If port 3000 is in use, update it under the `client` service in `docker-compose.yml`.
- **Port 3006 (Server)**:
  - Used by the NestJS backend.
  - **Note**: If port 3006 is in use, update it under the `server` service in `docker-compose.yml` and adjust the `SERVER_URL` in the client service accordingly.
- **Port 27017 (MongoDB)**:
  - Used by the MongoDB service.
  - **Note**: If port 27017 is in use, update it under the `mongodb` service in `docker-compose.yml`.

## Database Parameters

To modify MongoDB settings, locate the `mongodb` service in the `docker-compose.yml` file and update the environment variables. In particular:

- Change the values for the three environment variables (e.g., username, password, and database name).
- Update the `DB_URI` accordingly to match your new settings.

## Prerequisites

- [Docker](https://www.docker.com/) must be installed and running on your machine.
- Ensure Docker has sufficient resources (memory, CPU, disk space) to run the containers.
- For Docker Desktop users, verify resource allocation under **Preferences/Settings → Resources**.

## How to Run the Project

1. **Clone the Repository:**

   ```bash
   git clone <https://github.com/SteveBand/IsraelHayomTask.git>
   cd <repository-folder>
   ```

2. **Ensure Pre-Built Artifacts Are Not Included:**

- Remove any pre-built files (e.g., the .next folder) from the project root to avoid conflicts during Docker build
- Use a .dockerignore file to exclude unnecessary files and directories from the Docker build context.

3. **Start the Application:**

   - **Run the following command from the root of the project:**

     ```
     docker-compose up --build
     ```

   - **This command will:**

     - Build and start the Next.js client (default on port 3000)
     - Build and start the NestJS server (default on port 3006)
     - Build and start the MongoDB service (default on port 27017)

4. **Access the Application:**

- Frontend (Next.js): Open http://localhost:3000 in your browser.
- Backend (NestJS API): Open http://localhost:3006 if you wish to interact with the API directly.

## Additional Notes

- **Docker Configuration for Each Framework:**

  - Each of the Client and Server folders includes its own `Dockerfile` and `docker-compose.yml` to build and run the individual components.
  - The root-level `docker-compose.yml` combines these services with the MongoDB service, ensuring that the entire stack is built and executed together.

- **Seeding:**

  - The server contains a seeder service that automatically seeds the database using two JSON files if no data exists at startup.

- **Aggregation Pipeline:**

  - The Posts model’s `findAll` service uses an aggregation pipeline to efficiently group posts by writer, sort them by `createdAt` in descending order, and join each post with its corresponding writer data.

- **Using useCallback:**

  - In the client, the `useCallback` hook is used to cache the navigation button handler functions.  
    **Note:** While `useCallback` caches the function definitions, it does not prevent component re-renders.

- **Starting the Application:**

  - Ensure that Docker is running and has sufficient resources.
  - Run the following command from the root of the project to build and start all services:

    ```bash
    docker-compose up --build
    ```

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
