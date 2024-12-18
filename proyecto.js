const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Permite solicitudes desde el frontend
app.use(express.json()); // Parsear JSON en solicitudes

// Base de datos simulada
let users = [
  {
    user_id: "12345",
    name: "Pedrito Sola",
    skills: ["hablar en público", "hacer comerciales"],
    hourly_rate: 30,
    personality_traits: ["introvertido"],
  },
  {
    user_id: "67890",
    name: "María Gómez",
    skills: ["escritura creativa", "traducción"],
    hourly_rate: 25,
    personality_traits: ["extrovertida"],
  },
];

// Endpoint: Buscar personas por habilidad
app.get("/users/search", (req, res) => {
  const skill = req.query.skill?.toLowerCase();
  if (!skill) {
    return res.status(400).json({ error: "Debes proporcionar una habilidad." });
  }

  const results = users.filter((user) =>
    user.skills.some((s) => s.toLowerCase().includes(skill))
  );

  res.json(results);
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
