# Express Template

1. `npm install` Pakete nachinstallieren
2. `npm run dev`, um API-Server auf dem Port, welcher in der `.env` Datei definiert ist, zu starten

## Dokumentation

`/test` : Soll eine Testroute darstellen und Gibt ein Hello World! zurück

## Szenario

1. Wir möchten eine Todo App entwickeln
2. User Login
3. User Sign Up
4. Benutzer/in soll seine/ihre Todos verwalten können

## Auth

1. GET - /auth/login: Benutzer einloggen
2. POST - /auth/signup - Benutzer erstellen
3. DELETE - /auth/logout - Benutzer ausloggen

## User

1. GET - /user/profile: Profil des Nutzers erhalten
2. PUT - /user/update: Profil Updaten
3. DELETE /user/delete: Löschen des Benutzers

## Todos

1. PUT - /todos/update: Update Todo
2. PUT - /todos/mark: Todo erledigt markieren
3. POST - /todos/create Todo erstellen
4. DELETE - /todo/delete TODO löschen
5. GET - /todos/byid: Ein einzelnes todo zurück geben
6. GET - /todos/byuserid: Alle Todos von einem Benutzer
