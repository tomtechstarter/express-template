const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Zugriff auf Umgebungsvariablen
const { PORT } = process.env;

// Initialisierung von expres
const app = express();
app.use(bodyParser.json());
// Use for development
app.use(cors());

// Datenbank simulieren
let profiles = [
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

//  ***GET REQUESTS***
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

//  ***POST REQUESTS***
app.post("/profile", (req, res) => {
  const newUser = req.body.user;

  profiles.push(newUser);

  res.json({ newProfile: newUser });
});

//  ***POST REQUESTS***
app.put("/profile/addusername", (req, res) => {
  const { username, userId } = req.body;

  const currentUser = profiles.find((item) => item.id === userId);
  currentUser.username = username;

  const deletedProfiles = profiles.filter((item) => item.id !== userId);
  deletedProfiles.push(currentUser);

  profiles = deletedProfiles;

  res.json({ updatedProfile: currentUser });
});

// App hört im folgenden auf den Port, welcher über die Umgebungsvariable definiert ist
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
