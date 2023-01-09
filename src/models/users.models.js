//instancia para la conexion a la base de datos
//importamos la instancia
const { Sequelize } = require("sequelize")
const db = require("../utils/database")

//vamos a necesitar los tipos de datos de sequelize en sql es varchar y en sequelize es STRING
//LO IMPortamos:
const { DataTypes } = require ('sequelize');

//definir el modelo de usuarios
//los modelos se definen con una Mayuscula

//parametros
//nombre de la tabla
//los atributos de las tablas

const Users = db.define("users", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
} );
module.exports = Users;