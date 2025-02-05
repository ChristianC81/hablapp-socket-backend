const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const Group = sequelize.define(
  "Group",
  {
    idGroup: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
    image: { type: DataTypes.STRING, allowNull: true },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { tableName: "groups" }
);

module.exports = Group;
