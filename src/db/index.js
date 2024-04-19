const { Sequelize } = require("sequelize");
const { dbConfig } = require("../shared/config/index.js");
const db = new Sequelize({
  host: dbConfig.host,
  port: dbConfig.port,
  database: dbConfig.name,
  username: dbConfig.user,
  password: dbConfig.pwd,
  dialect: "postgres",
});

module.exports = db;
