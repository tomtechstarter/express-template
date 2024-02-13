const express = require("express");
const cors = require("cors");

// Zugriff auf Umgebungsvariablen
const { PORT } = process.env;

// Initialisierung von expres
const app = express();
// Use for development
app.use(cors());

// Datenbank simulieren
const profiles = [
  {
    id: 1,
    firstName: "Max",
    name: "Mustermann",
    birthDate: new Date("1990-10-10"),
  },
  {
    id: 2,
    firstName: "Nina",
    name: "Mustermann",
    birthDate: new Date("1980-10-10"),
  },
];

// Get all Profiles
app.get("/profiles", (req, res) => {
  res.json({ profiles });
});

// Return profile from a specific user
app.get("/profile", (req, res) => {
  const userId = parseInt(req.query.userId);
  const userProfile = profiles.find((item) => item.id === userId);
  res.json({ profile: userProfile });
});

// App hört im folgenden auf den Port, welcher über die Umgebungsvariable definiert ist
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
