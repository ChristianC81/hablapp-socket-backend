const express = require("express");
const { protectRoute } = require("../middleware/auth.middleware.js");
const { getGroups, createGroup, addUserToGroup, getGroupUsers } = require("../controllers/GroupController.js");
const { getGroupMessages, sendGroupMessage } = require("../controllers/MessageController.js");

const router = express.Router();

// Rutas para grupos
router.get("/groups", protectRoute, getGroups);  // Obtener lista de grupos
router.post("/groups", protectRoute, createGroup);  // Crear un nuevo grupo
router.post("/groups/:groupId/users", protectRoute, addUserToGroup);  // Agregar usuario a un grupo
router.get("/groups/:groupId/users", protectRoute, getGroupUsers); // Obtener usuarios de un grupo

// Rutas para mensajes grupales
//router.get("/groups/:groupId/messages", protectRoute, getGroupMessages);  // Obtener mensajes de un grupo
//router.post("/groups/:groupId/messages", protectRoute, sendGroupMessage);  // Enviar mensaje a un grupo

module.exports = router;
