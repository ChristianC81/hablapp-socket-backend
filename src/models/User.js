const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define(
  "User",
  {
    idUser: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    fullname: { type: DataTypes.STRING, allowNull: true },
    password: { type: DataTypes.STRING, allowNull: true, default: 6 },
    profilePic: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    status: {
      type: DataTypes.ENUM("online", "offline"),
      defaultValue: "offline",
    },
    last_seen: { type: DataTypes.DATE, allowNull: true },
  },
  { tableName: "users" }
);

module.exports = User;
