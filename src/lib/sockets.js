const socketIo = require("socket.io");
const { Sequelize } = require("sequelize");
const User = require("../models/User"); // Asegúrate de que la ruta sea correcta

const userSocketMap = {};
let io;

function initializeSockets(server) {
  io = socketIo(server, {
    cors: {
      origin: ["http://localhost:5173"],
    },
  });

  io.on("connection", async (socket) => {
    console.log("A user connected", socket.id);
    const idUser = socket.handshake.query.idUser;

    if (idUser) {
      try {
        // Actualizar estado a online
        await User.update({ status: "online" }, { where: { idUser: idUser } });

        // Obtener y emitir usuario actualizado
        const updatedUser = await User.findByPk(idUser);
        io.emit("userStatusUpdate", updatedUser);

        userSocketMap[idUser] = socket.id;
      } catch (err) {
        console.error("Error updating user status:", err);
      }
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // 🔥 Nuevo: Manejar mensajes con emojis
    socket.on("sendMessage", (message) => {
      if (!message.text) return;

      // Convertir texto con emojis a Unicode
      const textWithEmojis = emoji.emojify(message.text);

      // Enviar el mensaje modificado
      io.emit("receiveMessage", { ...message, text: textWithEmojis });
    });
    socket.on("typing", ({ senderId, receiverId }) => {
      const receiverSocketId = userSocketMap[receiverId];
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("userTyping", senderId); // Emitir al usuario receptor
      }
    });

    socket.on("disconnect", async () => {
      console.log(`Usuario ${idUser} desconectado`);

      if (idUser) {
        try {
          // Actualizar estado y última conexión
          // await User.update(
          //   { status: "offline", last_seen: new Date() },
          //   { where: { idUser: idUser } }
          // );

          await User.update(
            {
              status: "offline",
              last_seen: Sequelize.literal("CURRENT_TIMESTAMP"), // Usar función de BD
            },
            { where: { idUser: idUser } }
          );

          // Obtener y emitir usuario actualizado
          const updatedUser = await User.findByPk(idUser);
          io.emit("userStatusUpdate", updatedUser);

          delete userSocketMap[idUser];
        } catch (err) {
          console.error("Error updating user status:", err);
        }
      }

      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  });
}

function getReceiverSocketId(idUser) {
  return userSocketMap[idUser];
}

function getIo() {
  return io;
}

module.exports = { initializeSockets, getReceiverSocketId, getIo };
