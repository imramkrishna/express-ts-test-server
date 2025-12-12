import express, { Request, Response } from 'express';

const app = express();

// Middleware
app.use(express.json());

// Hello World route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default app;
