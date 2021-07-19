/* require('dotenv').config();

const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("../models/users");
 const MariaDb = process.env.MARIADB
console.log(MariaDb);

const sequelize = new Sequelize(
  process.env.MY_SQL_DATABASE,
  process.env.MY_SQL_USER,
 
  {
    dialect: process.env.NODE_ENV,
    dialectOptions: { connectTimeout: 1000 },
    host: process.env.MY_SQL_HOST,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      iddle: 10000,
    },
  }
);



 


















const user = UserModel(sequelize, DataTypes);

console.log(user);

module.exports = { sequelize, user };



/* process.env.MY_SQL_PASSWORD, */



 
 