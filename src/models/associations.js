const User = require("./User");
const Message = require("./Message");
const Group = require("./Group");
const GroupMessage = require("./GroupMessage");
const UserGroup = require("./UserGroup");

const applyAssociations = () => {
 // Relaciones para mensajes directos (User <-> Message)
 User.hasMany(Message, { foreignKey: "senderId", as: "sentMessages" });
 User.hasMany(Message, { foreignKey: "receiverId", as: "receivedMessages" });
 Message.belongsTo(User, { foreignKey: "senderId", as: "sender" });
 Message.belongsTo(User, { foreignKey: "receiverId", as: "receiver" });

 // Relación muchos a muchos entre User y Group (a través de UserGroup)
 User.belongsToMany(Group, { through: UserGroup, foreignKey: "userId" });
 Group.belongsToMany(User, { through: UserGroup, foreignKey: "groupId" });

 // Relaciones para mensajes grupales (Group <-> GroupMessage)
 Group.hasMany(GroupMessage, { foreignKey: "groupId" });
 GroupMessage.belongsTo(Group, { foreignKey: "groupId" });

 // Relación de los mensajes grupales con el usuario que los envía
 GroupMessage.belongsTo(User, { foreignKey: "senderId", as: "sender" });

};

module.exports = { applyAssociations, User, Message };