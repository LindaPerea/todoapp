const Todos = require('./todos.models');
const Users = require('./users.models');
const Categories = require('./categories.models');
const TodosCategories = require('./todos-categories.models');

const initModels =  () => {      
    //vamos a crear las relaciones
    //hasOne -> para indicar que tiene uno solo
    //hasMany -> que tiene muchos
    //BelongsTo ->que pertenece a 
    Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'});
    Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'});

    //relacion M-M caterories y tareas
    TodosCategories.belongsTo(Todos, { as: 'task', foreignKey: 'todo_id'});
    Todos.hasMany(TodosCategories, { as: 'categories', foreignKey: 'todo_id'});

    TodosCategories.belongsTo(Categories, { as: 'category', foreignKey: 'category_id'});
    Categories.hasMany(TodosCategories, { as: 'task', foreignKey: 'category_id'});


    Users.hasMany(Categories, {as: 'categories', foreignKey: 'user_id'});
    Categories.belongsTo(Users, {as: "author", foreignKey: "user_id"});
}

module.exports = initModels;