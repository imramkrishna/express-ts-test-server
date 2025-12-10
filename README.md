# express-ts-test-server

A TypeScript Express.js hello world server

## Features

- TypeScript with strict mode enabled
- Express.js REST API
- Source code in `src/` directory
- Compiled output in `dist/` directory
- Development mode with hot reload using ts-node

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the server in development mode (TypeScript):

```bash
npm run dev
```

### Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

### Production

Run the compiled server:

```bash
npm start
```

## API Endpoints

- `GET /` - Hello World endpoint
  - Response: `{"message": "Hello World!"}`
- `GET /health` - Health check endpoint
  - Response: `{"status": "ok", "timestamp": "ISO timestamp"}`

## Project Structure

```
express-ts-test-server/
├── src/           # TypeScript source files
│   └── index.ts   # Main server file
├── dist/          # Compiled JavaScript (generated)
├── package.json   # Project dependencies and scripts
└── tsconfig.json  # TypeScript configuration
```
