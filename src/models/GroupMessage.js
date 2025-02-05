const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const GroupMessage = sequelize.define(
  "GroupMessage",
  {
    idGroupMessage: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.TEXT, allowNull: false },
    senderId: { type: DataTypes.INTEGER, allowNull: false }, // Usuario que envía el mensaje
    groupId: { type: DataTypes.INTEGER, allowNull: false }, // Grupo al que pertenece el mensaje
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { tableName: "group_messages" }
);


module.exports = GroupMessage;
