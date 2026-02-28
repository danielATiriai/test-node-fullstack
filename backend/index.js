const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Optional database connection
const databaseUrl = process.env.DATABASE_URL;
if (databaseUrl) {
  const { Pool } = require('pg');
  const pool = new Pool({ connectionString: databaseUrl });
  app.locals.db = pool;
  console.log('Database connection configured');
}

app.get('/', (req, res) => {
  res.json({ service: 'test-node-fullstack-backend' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/items', (req, res) => {
  res.json([{ id: 1, name: 'Node Item' }]);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
