# Student Management System API Documentation

## Auth Actions

### 1. Login

- **Endpoint:** `/v1/auth/login`
- **Method:** `POST`
- **Request:**
    ```json
    {
      "email": "admin@admin.com",
      "password": "admin"
    }
    ```
- **Response:**
    ```json
    {
    "status": true,
    "data": {
        "_id": "658ea0325120742be0aa908c",
        "name": "admin",
        "email": "admin@admin.com",
        "role": "Admin",
        "createdAt": "2023-12-29T10:32:18.780Z",
        "updatedAt": "2023-12-29T10:32:18.780Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJBZG1pbiIsImlkIjoiNjU4ZWEwMzI1MTIwNzQyYmUwYWE5MDhjIiwiaWF0IjoxNzAzODUxNDQ5LCJleHAiOjE3MDM5Mzc4NDl9.uzMR3lzH1dRBAZ7TFU6T06rtIm5P3jYs4G3VWuU-v1Q"
   }
    ```

## Admin Actions    

### 1. Add Student

- **Endpoint:** `/v1/admin/addStudent`
- **Method:** `POST`
- **Request:**
    ```json
    {
   "name": "test user",
   "email": "test3@gmail.com",
   "password": "test123",
   "department": "Data Science"
   }
    ```
- **Response:**
    ```json
    {
    "status": true,
    "data": {
        "name": "test user",
        "email": "test3@gmail.com",
        "role": "Student",
        "department": "Data Science",
        "_id": "658eb62edaa684cf0eeb67aa",
        "createdAt": "2023-12-29T12:06:06.302Z",
        "updatedAt": "2023-12-29T12:06:06.302Z",
        "__v": 0
    }
   }
    ```

### 2. Assign Task

- **Endpoint:** `/v1/admin/assignTask`
- **Method:** `POST`
- **Request:**
    ```json
    {
    "title": "test title",
    "description": "Nothing"
    }
    ```
- **Response:**
    ```json
    {
    "status": true
    }
    ```

## Student Actions
 
### 1. View Tasks

- **Endpoint:** `/v1/student/tasks`
- **Method:** `GET`
- **Response:**
    ```json
    {
    "success": true,
    "data": [
        {
            "_id": "658eada005c3a3531005514a",
            "task": "658eada005c3a35310055148",
            "assignedTo": "658ea772aefae4a3ab169211",
            "status": "Completed",
            "createdAt": "2023-12-29T11:29:36.651Z",
            "updatedAt": "2023-12-29T11:31:00.298Z",
            "__v": 0
        },
        {
            "_id": "658eb68bdaa684cf0eeb67b0",
            "task": "658eb68bdaa684cf0eeb67ae",
            "assignedTo": "658ea772aefae4a3ab169211",
            "status": "Pending",
            "createdAt": "2023-12-29T12:07:39.264Z",
            "updatedAt": "2023-12-29T12:07:39.264Z",
            "__v": 0
        }
    ]
  }
    ```

### 2. Change Task Status

- **Endpoint:** `/v1/student/changeTaskStatus/:id`
- **Method:** `POST`
- **Request:**
    ```json
    {
    "status": "Completed"
    }
    ```
- **Response:**
    ```json
    {
    "status": true,
    "data": {
        "_id": "658eb68bdaa684cf0eeb67b0",
        "task": "658eb68bdaa684cf0eeb67ae",
        "assignedTo": "658ea772aefae4a3ab169211",
        "status": "Completed",
        "createdAt": "2023-12-29T12:07:39.264Z",
        "updatedAt": "2023-12-29T12:12:28.587Z",
        "__v": 0
    }
    }
    ```
