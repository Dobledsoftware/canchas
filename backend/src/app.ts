import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); // Permite peticiones desde el frontend

// Examples (mover a DB)
const canchas = [
  { id: 1, tipo: '5', precio: 20000 },
  { id: 2, tipo: '7', precio: 30000 },
  { id: 3, tipo: '9', precio: 60000 },
];

app.get('/canchas', (req, res) => {
  res.json(canchas);
});

app.listen(3000, () => {
  console.log('Backend corriendo en http://localhost:3000');
});