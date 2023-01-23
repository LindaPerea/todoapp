const db = require('../utils/database');
const Users = require('../models/users.models');
const Todos = require('../models/todos.models');
const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos-categories.models');
// const initModels = require('../models/init.Models');

// initModels();

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

const categories = [
    { name: "personal", userId: 1}, 
    { name: "escuela", userId: 2 }, 
    { name: "salud", userId: 3 }, 
    { name: "trabajo", userId: 1 }, 
    { name: "hogar", userId: 2 },
    { name: "deporte", userId: 3 },
    { name: "ocio", userId: 1 },
    { name: "financiero", userId: 2 },
];

const todoscategories = [
    { todoId: 1, categoryId: 8 },
    { todoId: 1, categoryId: 2 },
    { todoId: 1, categoryId: 4 },
    { todoId: 2, categoryId: 1 },
    { todoId: 2, categoryId: 3 },
    { todoId: 2, categoryId: 6 },
    { todoId: 2, categoryId: 7 },
    { todoId: 3, categoryId: 1 },
    { todoId: 3, categoryId: 3 },
];

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

        setTimeout(() => {
            categories.forEach((category) => Categories.create(category));
        }, 300);

        setTimeout(() => {
            todoscategories.forEach((tc) => TodosCategories.create(tc));
        }, 500);        
    })

    .catch((error) => console.log(error));

