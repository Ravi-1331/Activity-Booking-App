# Activities Booking API

## Features
- Register/Login users with JWT authentication
- List activities (public)
- Book activities (authorized)
- View user’s bookings

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT + bcrypt
- express-validator

Here's a complete list of your API endpoints along with sample **JSON request bodies**, **methods**, and **expected responses** — perfect for including in your `README.md` for easy Postman testing.

---

## 📘 API Documentation for Activity Booking App

---

### 🔐 1. **Register User**

**Endpoint:** `POST /api/auth/register`
**Description:** Register a new user.

**Request Body (JSON):**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "securePass123"
}
```

**Response:**

```json
{
  "message": "User registered successfully"
}
```

---

### 🔐 2. **Login User**

**Endpoint:** `POST /api/auth/login`
**Description:** Logs in a user and returns a JWT token.

**Request Body (JSON):**

```json
{
  "email": "john@example.com",
  "password": "securePass123"
}
```

**Response:**

```json
{
  "token": "JWT_TOKEN_HERE"
}
```

---

### 📂 3. **List All Activities (Public)**

**Endpoint:** `GET /api/activities/`
**Description:** Fetch all available activities.

**Response:**

```json
[
  {
    "_id": "663c9bfbf96e1a7d4c40d1e2",
    "title": "Football Match",
    "description": "Exciting local league final",
    "location": "City Stadium",
    "date": "2025-06-20",
    "time": "18:00"
  }
]
```

---

### ➕ 4. **Add Activity (Admin/Developer Use Only)**

**Endpoint:** `POST /api/activities/add`
**Description:** Add one or more activities.

**Headers:**
`Authorization: Bearer <your_JWT_token>`

**Single Activity Body:**

```json
{
  "title": "Cricket Match",
  "description": "Local cricket tournament semi-final",
  "location": "Green Field Stadium",
  "date": "2025-06-21",
  "time": "16:00"
}
```

**Multiple Activities Body:**

```json
[
  {
    "title": "Football Championship Final",
    "description": "Final match between top teams.",
    "location": "National Football Stadium",
    "date": "2025-06-20",
    "time": "18:00"
  },
  {
    "title": "Movie Night: Avengers Endgame",
    "description": "Special screening at Cineplex.",
    "location": "Cineplex Theatre",
    "date": "2025-06-22",
    "time": "20:30"
  }
]
```

---

### 🎫 5. **Book an Activity (Requires Auth)**

**Endpoint:** `POST /api/bookings/book`
**Description:** Book an activity by its ID.

**Headers:**
`Authorization: Bearer <your_JWT_token>`

**Request Body:**

```json
{
  "activityId": "663c9bfbf96e1a7d4c40d1e2"
}
```

**Response:**

```json
{
  "message": "Booking Completed",
  "booking": {
    "_id": "663cabcde...",
    "user": "663c999...",
    "activity": "663c9bfbf96e1a7d4c40d1e2"
  }
}
```

---

### 📋 6. **Get My Bookings (Requires Auth)**

**Endpoint:** `GET /api/bookings/my`
**Description:** Get all bookings of the logged-in user.

**Headers:**
`Authorization: Bearer <your_JWT_token>`

**Response:**

```json
{
  "message": "Here is your booking",
  "bookings": [
    {
      "_id": "663cabcde...",
      "activity": {
        "title": "Football Championship Final",
        "description": "...",
        "location": "...",
        "date": "2025-06-20",
        "time": "18:00"
      }
    }
  ]
}
```

---

## 🔧 Setup Instructions

1. Clone the repo and run:

   ```bash
   npm install
   ```

2. Create a `.env` file and add:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. Start the server:

   ```bash
   npm run dev
   ```
