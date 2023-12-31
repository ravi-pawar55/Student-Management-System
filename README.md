# Student Management System API

Student Management System API is a Node.js-based RESTful API designed for managing student information. It provides endpoints for admin actions like adding students and assigning tasks, as well as student actions like viewing tasks and updating task status.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ravi-pawar55/Student-Management-System.git
    ```
2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Environment Variables:**

    Update a `.env` file in the root of your project and add the following:

    ```env
    PORT= 3000
    MONGODB_URL= 'Your MongoDB URI'
    JWT_SECRET= 'Your Secret'
    ```
    Update the `MONGODB_URL` value with your MongoDB connection string.

## Running the Server Locally

To run the server in development mode with automatic restart on file changes, use:

```bash
npm start
```

## API Documentation

For detailed API documentation, please refer to [documentation.md](https://github.com/ravi-pawar55/Student-Management-System/blob/main/documentation.md).

