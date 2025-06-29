const express = require('express');
const app = express();
require('dotenv-flow').config();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ message: process.env.MESSAGE || 'pong' });
});

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Missing parameters' });
  const result = Number(a) + Number(b);
  res.json({ result });
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Missing parameters' });
  const result = Number(a) - Number(b);
  res.json({ result });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app;
