# Rails + React Blog

A modern blog application built with Ruby on Rails API backend and React frontend. This project demonstrates a full-stack application using Rails 8.0 for the API and Vite + React for the frontend.

## Features

- RESTful API with Rails 8.0
- React 18 frontend with Vite
- PostgreSQL database
- Docker support for production deployment
- Kamal deployment configuration
- Background job processing with Solid Queue
- Caching with Solid Cache
- Action Cable support for real-time updates

## Prerequisites

- Ruby 3.3.0
- Node.js 18+
- PostgreSQL
- Docker (for production)

## Getting Started

### Backend Setup

1. Clone the repository
2. Install Ruby dependencies:

```bash
bundle install
```

3. Set up the database:

```bash
rails db:setup db:migrate db:seed
```

4. Start the Rails server:

```bash
rails server
```


The frontend will be available at `http://localhost:5173`

## API Endpoints

### Posts

- `GET /api/v1/posts` - List all posts
- `GET /api/v1/posts/:id` - Get a specific post
- `POST /api/v1/posts` - Create a new post
- `PATCH/PUT /api/v1/posts/:id` - Update a post
- `DELETE /api/v1/posts/:id` - Delete a post

## Docker Deployment

This application includes Docker support for production deployment. To build and run the application:

1. Build the Docker image:

```bash
docker build -t blog-app .
```

2. Run the Docker container:

```bash
docker run -p 3000:3000 blog-app
```
