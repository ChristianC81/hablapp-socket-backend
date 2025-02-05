const GroupMessage = require("../models/GroupMessage");
const { getIo } = require("../lib/sockets");

// Obtener mensajes de un grupo
exports.getGroupMessages = async (req, res) => {
  const { groupId } = req.params;
  try {
    const messages = await GroupMessage.findAll({ where: { groupId } });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener mensajes del grupo" });
  }
};

// Enviar mensaje a un grupo
exports.sendGroupMessage = async (req, res) => {
  const { text } = req.body;
  const { groupId } = req.params;
  const senderId = req.user.idUser;

  try {
    const newMessage = await GroupMessage.create({
      senderId,
      groupId,
      text,
    });

    const io = getIo();
    io.to(`group_${groupId}`).emit("newGroupMessage", newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Error al enviar mensaje al grupo" });
  }
};
