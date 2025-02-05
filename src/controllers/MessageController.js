const { Sequelize } = require("sequelize");
const Message = require("../models/Message");
const User = require("../models/User");
const { getReceiverSocketId, getIo } = require("../lib/sockets");
const cloudinary = require("../lib/cloudinary.js"); 

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user.idUser;
    const filteredUsers = await User.findAll({
      where: { idUser: { [Sequelize.Op.ne]: loggedInUserId } },  
      attributes: { exclude: ['password'] }, 
    });

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user.idUser;
    const messages = await Message.findAll({
      where: {
        [Sequelize.Op.or]: [
          { senderId: myId, receiverId: userToChatId },
          { senderId: userToChatId, receiverId: myId },
        ],
      },
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const sendMessage = async (req, res) => {
  try {
    console.log("req.body: ", req.body);
    console.log("req.params: ", req.params);

    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.idUser;

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    const receiverSocketId = getReceiverSocketId(receiverId);
    const io = getIo();  

    if (receiverSocketId && io) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getUsersForSidebar,
  getMessages,
  sendMessage
};
