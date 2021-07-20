const { Sequelize, DataTypes } = require("sequelize");

const UserModel = require("../models/users");

const sequelize = new Sequelize(
  process.env.MY_SQL_DATABASE,
  process.env.MY_SQL_USER,
  process.env.MY_SQL_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.MY_SQL_HOST,
    port: process.env.MY_SQL_PORT,
    pool: {
      max: 5,
      min: 0,
      idle: 20000,
      acquire: 30000,
      evict: 15000,
    },
  }
);

const user = UserModel(sequelize, DataTypes);

console.log("sequelize user", user);

module.exports = { sequelize, user };