# Node.js Express Server Tutorial

A simple Node.js server built with Express.js that demonstrates basic HTTP endpoint creation. This tutorial project hosts two GET endpoints - one returning "Hello world" and another returning "Good evening".

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Examples](#examples)

## Prerequisites

Before running this project, ensure you have the following installed on your system:

- **Node.js** - Version 18.0.0 or higher
- **npm** - Version 7.0.0 or higher (comes bundled with Node.js)

To verify your installations, run the following commands:

```bash
node --version
# Expected output: v18.x.x or higher

npm --version
# Expected output: 7.x.x or higher
```

## Installation

1. Clone the repository or navigate to the project directory:

```bash
cd <project-directory>
```

2. Install the project dependencies:

```bash
npm install
```

This will install Express.js and all required dependencies as specified in `package.json`.

## Usage

Start the server using npm:

```bash
npm start
```

Alternatively, you can run the server directly with Node.js:

```bash
node src/index.js
```

Upon successful startup, you will see the following message in your terminal:

```
Server running on port 3000
```

The server is now ready to accept HTTP requests.

## API Endpoints

This server provides the following HTTP endpoints:

| Method | Endpoint   | Description                        | Response         |
|--------|------------|------------------------------------|------------------|
| GET    | `/`        | Root endpoint - Hello World        | `Hello world`    |
| GET    | `/evening` | Evening greeting endpoint          | `Good evening`   |

### GET /

Returns a simple "Hello world" greeting.

**Request:**
- Method: `GET`
- Path: `/`

**Response:**
- Status Code: `200 OK`
- Content-Type: `text/html; charset=utf-8`
- Body: `Hello world`

### GET /evening

Returns a "Good evening" greeting.

**Request:**
- Method: `GET`
- Path: `/evening`

**Response:**
- Status Code: `200 OK`
- Content-Type: `text/html; charset=utf-8`
- Body: `Good evening`

## Configuration

### Port Configuration

The server listens on port `3000` by default. You can configure a different port by setting the `PORT` environment variable:

```bash
# Linux/macOS
PORT=8080 npm start

# Windows (Command Prompt)
set PORT=8080 && npm start

# Windows (PowerShell)
$env:PORT=8080; npm start
```

| Environment Variable | Default Value | Description                    |
|---------------------|---------------|--------------------------------|
| `PORT`              | `3000`        | The port the server listens on |

## Examples

### Testing with curl

Once the server is running, you can test the endpoints using curl:

**Test the Hello World endpoint:**

```bash
curl http://localhost:3000/
```

Expected output:
```
Hello world
```

**Test the Good Evening endpoint:**

```bash
curl http://localhost:3000/evening
```

Expected output:
```
Good evening
```

### Testing with a Web Browser

Simply open your web browser and navigate to:

- `http://localhost:3000/` - Displays "Hello world"
- `http://localhost:3000/evening` - Displays "Good evening"

## Project Structure

```
project-root/
├── package.json      # Project configuration and dependencies
├── src/
│   └── index.js      # Express.js server application
├── README.md         # Project documentation (this file)
└── .gitignore        # Git ignore patterns
```

## License

This project is provided as a tutorial example for learning purposes.
