const express = require("express");
const { getUsers, createUser } = require("../controllers/UserController");
const router = express.Router();

router.get("/", getUsers);      // Obtener lista de usuarios
router.post("/", createUser);   // Crear un nuevo usuario

module.exports = router;
