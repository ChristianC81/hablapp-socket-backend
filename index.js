// index.js
const express = require("express");
const http = require("http");
const path = require("path");
const dotenv = require("dotenv");
const sequelize = require("./src/utils/database");
const userRoutes = require("./src/routes/userRoutes");
const messageRoutes = require("./src/routes/messageRoutes");
const authRoutes = require("./src/routes/auth.route");
const groupRoutes = require("./src/routes/groupRoutes");
const { applyAssociations } = require("./src/models/associations");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { initializeSockets } = require("./src/lib/sockets");

dotenv.config();

const app = express();
const server = http.createServer(app);

// Inicializar sockets
initializeSockets(server);

// Aumentar el límite de tamaño para las solicitudes JSON
app.use(express.json({ limit: '50mb' })); // Aquí puedes ajustar el límite según tus necesidades
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Rutas REST
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/groups", groupRoutes);

// Aplicar las relaciones
applyAssociations();
sequelize
  .authenticate()
  .then(() => {
    console.log("📂 Base de datos sincronizada.");
    return sequelize.sync();
  })
  .then(() => {
    console.log("🚀 Servidor corriendo en http://localhost:3000");
    server.listen(3000);
  })
  .catch((error) => {
    console.error("❌ Error de conexión:", error);
  });
