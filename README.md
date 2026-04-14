# Food Delivery App

## Overview

A full-stack food delivery platform. The project consists of a React + Vite frontend and a Node.js + Express + MongoDB backend.

### Core Use Cases

- User registration/login
- Meal browsing
- Cart management
- Order placement
- Admin food/order management
- Image upload
- Payment integration (Stripe)

## Tech Stack

- Frontend: React 19, Vite
- Backend: Node 18+, Express 5
- Database: MongoDB (Mongoose)
- Auth: JWT
- File Upload: Multer
- Payment: Stripe
- Lint: ESLint
- Dev tools: nodemon

## Folder Structure

```
Food-Delivery-App/
  Backend/
    server.js
    config/
    controllers/
    middleware/
    models/
    routes/
    uploads/
    package.json
  Frontend/
    src/
    public/
    package.json
```

## Setup

### 1. MongoDB

- Use local MongoDB or MongoDB Atlas.
- Create a `.env` file under `Backend/`.

```
PORT=5000
MONGO_URL=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
```

### 2. Backend

```bash
cd Food-Delivery-App/Backend
npm install
npm run start
```

### 3. Frontend

```bash
cd Food-Delivery-App/Frontend
npm install
npm run dev
```

## Backend API Endpoints (example)

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/foods`
- `POST /api/cart`
- `POST /api/orders`
- `POST /api/upload`
- `POST /api/payment`

> Ensure your frontend proxy is configured properly or CORS is enabled in the backend.

## Run Tests / Lint

`npm run lint` (Frontend)

## Deployment

- Backend: Heroku / Vercel / Render (Node)
- Frontend: Netlify / Vercel / Firebase Hosting

## Notes

- JWT expiration settings can be adjusted via config.
- Always hash passwords using `bcrypt`.
- Secure file uploads and validate image content.
