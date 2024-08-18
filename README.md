# Todo Application

## Overview

This is a simple Todo application built with React for the frontend, Express for the backend, and MongoDB for data storage. The application allows users to add Todos, view a list of Todos, and mark Todos as completed.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development server and build tool for modern web projects.

### Backend

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: A minimal and flexible Node.js web application framework.
- **Zod**: A TypeScript-first schema declaration and validation library.

### Database

- **MongoDB**: A NoSQL database for storing and retrieving data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- MongoDB (installed and running)
- npm

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/aavisalunkhe/toDo.git
   cd toDo
   ```

2. **Install Backend Dependencies**

   Navigate to the `backend` directory and install the dependencies:

   ```bash
   cd backend
   npm install
   ```

3. **Set up MongoDB Connection**

   In the `backend` directory, create a `.env` file and add your MongoDB connection string:

   ```
   MONGODB_URI=your-mongodb-connection-string
   ```

4. **Start the Backend Server**

   ```bash
   node index.js
   ```

   The backend server will start on `http://localhost:3000`.

5. **Install Frontend Dependencies**

   Navigate to the `todofrontend` directory and install the dependencies:

   ```bash
   cd ../todofrontend
   npm install
   ```

6. **Start the Frontend Development Server**

   ```bash
   npm run dev
   ```

   The frontend development server will start on `http://localhost:5173` (default Vite port).

## Features

- **Add Todo**: Users can add a new Todo with a title and description.
- **List Todos**: Displays a list of Todos with their titles, descriptions, and a button to mark them as completed.
- **Mark as Completed**: Toggles the completion status of a Todo item.

## File Structure

```
/backend
  ├── index.js          # Express server setup
  ├── zodVerify.js      # Input validation schemas
  ├── models            # MongoDB models
      └── Todo.js      # Todo model

/todofrontend
  ├── /src
      ├── /assets       # Static assets (e.g., images)
      ├── /components   # React components
          ├── AddTodo.jsx
          ├── ListTodos.jsx
      ├── App.jsx       # Main React component
      ├── main.jsx      # Entry point for React application
  ├── index.css         # Global styles
  └── vite.svg          # Vite logo (unused)

README.md               # This file
package.json            # Frontend dependencies and scripts
```

## API Endpoints

- **POST** `/addTodo`
  - **Request Body**: `{ title: string, description: string }`
  - **Description**: Adds a new Todo.

- **GET** `/listTodos`
  - **Description**: Retrieves a list of Todos.

- **POST** `/completed`
  - **Request Body**: `{ uniqueId: string }`
  - **Description**: Marks a Todo as completed.

## Contributing

Feel free to submit issues or pull requests if you find bugs or have suggestions for improvements!
```
