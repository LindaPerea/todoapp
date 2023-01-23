//importamos squelize
const { Sequelize } = require('sequelize');
require("dotenv").config();

//crear una instancia con parametros de conlfiguracion de nuestra base de datos
//necestiamos un objeto de configuracin que no es mas que las credenciales de mi base de datos
const db = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, //nombre de mi base de datos creada
    password: process.env.DB_PASSWORD,
    dialect: "postgres", //esto define la base de datos que estamos usando
    logging: false,
});

module.exports = db;