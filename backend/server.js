const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000; // El backend irá en el 4000 para no chocar con el frontend

app.use(cors()); // Esto permite que React se conecte
app.use(express.json());

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: "¡Hola desde el Backend!" });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});