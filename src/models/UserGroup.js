const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const UserGroup = sequelize.define(
  "UserGroup",
  {
    userId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      allowNull: false 
    },
    groupId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      allowNull: false 
    },
    joinedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { 
    tableName: "user_groups",
    timestamps: false // No necesitas timestamps si no los usas
  }
);

module.exports = UserGroup;
