# API Documentation

Welcome to the API documentation for InnoTopic_Website. This document provides an overview of all available endpoints and their functionalities.

## Base URL

The base URL for the API is `http://localhost:8000`.

## Endpoints

### 1. Root

#### `GET /`

- **Description**: Returns a welcome message.
- **Response**:
  - Status: 200 OK
  - Body: `{ "message": "Welcome to InnoTopic_Website API!" }`

### 2. Generate Prompt

#### `POST /generate-prompt`

- **Description**: Generates a shirt design prompt based on the provided text.
- **Request Body**:
  - `text` (string): The input text to generate a prompt.
- **Response**:
  - Status: 200 OK
  - Body: `{ "prompt": "Generated prompt text" }`

### 3. Generate Image

#### `POST /generate-image`

- **Description**: Creates a visual mockup based on the provided prompt.
- **Request Body**:
  - `prompt` (string): The design prompt to generate an image.
- **Response**:
  - Status: 200 OK
  - Body: `{ "image_url": "URL of the generated image" }`

### 4. CRUD Operations for Designs

#### `GET /designs`

- **Description**: Retrieves all designs.
- **Response**:
  - Status: 200 OK
  - Body: A list of design objects.

#### `POST /designs`

- **Description**: Creates a new design.
- **Request Body**:
  - Design object
- **Response**:
  - Status: 201 Created
  - Body: The created design object.

#### `GET /designs/{design_id}`

- **Description**: Retrieves a specific design by ID.
- **Response**:
  - Status: 200 OK
  - Body: The design object.

#### `PUT /designs/{design_id}`

- **Description**: Updates a specific design by ID.
- **Request Body**:
  - Updated design object
- **Response**:
  - Status: 200 OK
  - Body: The updated design object.

#### `DELETE /designs/{design_id}`

- **Description**: Deletes a specific design by ID.
- **Response**:
  - Status: 204 No Content

### 5. User Management Endpoints

#### `GET /users`

- **Description**: Retrieves all users.
- **Response**:
  - Status: 200 OK
  - Body: A list of user objects.

#### `POST /users`

- **Description**: Creates a new user.
- **Request Body**:
  - User object
- **Response**:
  - Status: 201 Created
  - Body: The created user object.

#### `GET /users/{user_id}`

- **Description**: Retrieves a specific user by ID.
- **Response**:
  - Status: 200 OK
  - Body: The user object.

#### `PUT /users/{user_id}`

- **Description**: Updates a specific user by ID.
- **Request Body**:
  - Updated user object
- **Response**:
  - Status: 200 OK
  - Body: The updated user object.

#### `DELETE /users/{user_id}`

- **Description**: Deletes a specific user by ID.
- **Response**:
  - Status: 204 No Content
