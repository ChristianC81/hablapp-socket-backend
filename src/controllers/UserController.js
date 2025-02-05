const User  = require("../models/User");

//Obtener lista de usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
    
   } catch (error) {
     res.status(500).json({ error: "Error al obtener usuarios" });
   }
};

//Crear un nuevo usuario
exports.createUser = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.create({ username, status: "online" });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};
