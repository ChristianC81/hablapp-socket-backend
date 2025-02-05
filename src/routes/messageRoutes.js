const express = require("express");
const { protectRoute } = require("../middleware/auth.middleware.js");
const { getUsersForSidebar, getMessages, sendMessage } = require("../controllers/MessageController");
const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);  // Obtener usuarios para sidebar
router.get("/:id", protectRoute, getMessages);     // Obtener historial de mensajes
router.post("/send/:id", protectRoute, sendMessage);    // Enviar un nuevo mensaje


module.exports = router;
