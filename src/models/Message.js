const { DataTypes } = require("sequelize");
const  sequelize  = require("../utils/database");

  const Message = sequelize.define(
    "Message",
    {
      idMessage: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      senderId: { type: DataTypes.INTEGER, allowNull: false },
      receiverId: { type: DataTypes.INTEGER, allowNull: true },
      text: { type: DataTypes.TEXT, allowNull: false },
      image: {
        type: DataTypes.STRING,
        allowNull: true,  // Opcional, para permitir mensajes sin imagen
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Usa el valor por defecto para la fecha actual
      },
    },
    { tableName: "messages" }
  );

  module.exports = Message;

