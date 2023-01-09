const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Adresses = db.define('adresses', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})