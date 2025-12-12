import dotenv from 'dotenv';
import app from './index';

// Load environment variables from .env file
dotenv.config();

const PORT = parseInt(process.env.PORT || '3000', 10);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
