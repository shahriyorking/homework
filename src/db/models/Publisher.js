const { DataTypes } = require("sequelize");
const db = require("../index.js");

const Publisher = db.define(
  "Publisher",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    tableName: "publishers",
    timestamps: true,
  }
);

module.exports =  Publisher;
