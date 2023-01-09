const db = require('../utils/database');
const Users = require('../models/users.models');
// const Categories = require('../models/categories.models');
const Todos = require('../models/todos.models');
// const todos-categories = require('../models/todos-categories.models');
const initModels = require('../models/init.Models');

initModels();

//construir aqui modelos de informacion

const users = [
    { username: "Ian Rosas", email: "ian@gmail.com", password: "1234" },
    { username: "Alvis Echeverria", email: "alvis@gmail.com", password: "1234"},
    { username: "Carlos Tineo", email: "carlos@gmail.com", password: "1234"},
];

const todos = [
    {
        title: "Crear seeders",
        description: "Terminar el archivo para los seeders",
        userId: 1,
    },
    {
        title: "Pasear al perro",
        description: "Darle la vuelta por todo el barrio a firulais",
        userId: 2,
    },
    {
        title: "Tomar dois litros de agua",
        userId: 3,
    },
];

// const addresses = [
//     { street: "Buena Vista", number: 157, userId: 1 },
//     { street: "Benito Juares", number: 57, userId: 2 },
//     { street: "Madero", number: 157, userId: 3},
// ];

// const categories = [
//     { name: "personal" }, // id 1
//     { name: "escuela" }, // id 2
//     { name: "salud" }, // id 3
//     { name: "trabajo" }, // id 4
//     { name: "hogar" }, // id 5
//     { name: "deporte" }, // id 6
//     { name: "ocio" }, // id 7
//     { name: "financiero" }, // id 8
// ];

// const tc = [
//     { tasksId: 1, categoryId: 1 },
//     { tasksId: 1, categoryId: 2 },
//     { tasksId: 1, categoryId: 4 },
//     { tasksId: 2, categoryId: 1 },
//     { tasksId: 2, categoryId: 3 },
//     { tasksId: 2, categoryId: 6 },
//     { tasksId: 2, categoryId: 7 },
//     { tasksId: 3, categoryId: 1 },
//     { tasksId: 3, categoryId: 3 },
// ];

// metodos: create es para crear 
//findOne, findAll, findByPk
// update es para actualizar 
// destroy es para eliminar

db.sync({ force: true })
    .then(() => {
        console.log("Iniciando la plantación de información ")
        users.forEach((user) => Users.create(user)); //INSERT INTO users()VALUES

        setTimeout(() => {
            todos.forEach((todo) => Todos.create(todo));
        }, 100);

        
    })
    .catch((error) => console.log(error));

