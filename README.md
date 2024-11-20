# BRAINSTATION
# Project Title
TeaHub: A Tea Exploration Tool

## Overview

TeaHub is a platform designed for tea enthusiasts to explore different tea types, share comments, and discover flavor combinations. This project aims to create an engaging and informative experience for tea lovers while promoting sustainable tea consumption.

### Problem

Many tea enthusiasts struggle to find comprehensive information about various tea types and their flavor profiles in one place. Additionally, there's a growing demand for sustainable tea options. TeaHub addresses these issues by providing a centralized platform for tea exploration and education.

### User Profile

- Tea enthusiasts looking to expand their knowledge
- Newcomers to the tea world seeking guidance
- Environmentally conscious consumers interested in sustainable tea options

### Features

- As a user, I want to view a list of different tea types
- As a user, I want to see detailed information about each tea type
- As a user, I want to add comments to tea types
- As a user, I want to read comments from other users about tea types

## Implementation

### Tech Stack

- React
- JavaScript
- MySQL
- Express
- Client libraries: 
    - react
    - react-router
    - axios
    - sass
- Server libraries:
    - knex
    - express
    - cors
    - uuid

### APIs

No external APIs will be used for the initial implementation.

### Sitemap

- Home page
- About page
- Tea details page

### Mockups



### Data

The database will include the following tables:
- Teas (id, name, type, description, origin, brewing_instructions)
- Comments (id, tea_id, user_name, content, created_at)

### Endpoints

GET /api/teas
- Get all teas

Response:
[
  {
    "id": 1,
    "name": "Earl Grey",
    "type": "Black",
    "description": "Flavored with oil of bergamot",
    "origin": "China"
  },
  ...
]

GET /api/teas/:id
- Get tea by id

Response:
{
  "id": 1,
  "name": "Earl Grey",
  "type": "Black",
  "description": "Flavored with oil of bergamot",
  "origin": "China",
  "brewing_instructions": "Steep for 3-5 minutes at 95°C",
  "comments": [
    {
      "id": 1,
      "user_name": "TeaLover",
      "content": "A classic favorite!",
      "created_at": "2023-11-19T18:00:00Z"
    },
    ...
  ]
}

POST /api/teas/:id/comments
- Add a comment to a tea

Request body:
{
  "user_name": "TeaEnthusiast",
  "content": "Great aroma and flavor profile!"
}

Response:
{
  "id": 2,
  "user_name": "TeaEnthusiast",
  "content": "Great aroma and flavor profile!",
  "created_at": "2023-11-19T18:05:00Z"
}

### Auth

No authentication will be implemented in the initial version.

## Roadmap

1. Set up React project with Vite
2. Create Express server and set up routes
3. Set up MySQL database and create migrations
4. Create Home Page
5. Create About Page
6. Implement tea listing functionality (frontend and backend)
7. Develop tea details page
8. Implement commenting system
8. Style the application
9. Testing and bug fixes
10. Deployment

## Nice-to-haves

- Integration with Shopify API for e-commerce functionality
- User authentication system
- Flavor combination recommendation feature (Food pairings API)
- Search and filter functionality for teas
- User profiles and favorite tea lists
- Integration with sustainable tea vendors
- Mobile app version