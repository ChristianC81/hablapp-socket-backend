const Group = require("../models/Group");
const UserGroup = require("../models/UserGroup");

// Obtener todos los grupos
exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.findAll();
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener grupos" });
  }
};

// Crear un nuevo grupo
exports.createGroup = async (req, res) => {
  const { name, description, image } = req.body;
  try {
    const group = await Group.create({ name, description, image });
    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({ error: "Error al crear grupo" });
  }
};

// Agregar usuario a un grupo
exports.addUserToGroup = async (req, res) => {
    const { userId, groupId } = req.body;
    try {
      // Verificar si el usuario ya está en el grupo antes de agregarlo
      const userGroup = await UserGroup.findOne({ where: { userId, groupId } });
      if (userGroup) {
        return res.status(400).json({ error: "El usuario ya está en este grupo" });
      }
  
      await UserGroup.create({ userId, groupId });
      res.status(201).json({ message: "Usuario agregado al grupo" });
    } catch (error) {
      res.status(500).json({ error: "Error al agregar usuario al grupo" });
    }
  };
  

// Obtener usuarios de un grupo
exports.getGroupUsers = async (req, res) => {
  const { groupId } = req.params;
  try {
    const users = await UserGroup.findAll({ where: { groupId } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios del grupo" });
  }
};
