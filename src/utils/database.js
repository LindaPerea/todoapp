//importamos squelize
const { Sequelize } = require('sequelize');

//crear una instancia con parametros de conlfiguracion de nuestra base de datos
//necestiamos un objeto de configuracin que no es mas que las credenciales de mi base de datos
const db = new Sequelize({
    database: "todoappdb", //nombre de mi base de datos creada
    username: "postgres", // mi postgres
    host: "localhost", // o tambien 127.0.0.1
    port: "5432",
    password: "root",
    dialect: "postgres", //esto define la base de datos que estamos usando
});

module.exports = db;