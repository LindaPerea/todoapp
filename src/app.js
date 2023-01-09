//importar express
const express = require('express');
const db = require("./utils/database");
const initModels = require('./models/init.models');
const Users = require('./models/users.models');
const Todos = require('./models/todos.models');

//crear una instancia de express
const app = express();

app.use(express.json());

const PORT = 8000;
//localhost:8000/

//probando la conexion a la base de datos
db.authenticate()
.then(() => console.log("autenticacion exitosa"))
.catch((error) => console.log("eror"));

initModels();
//vamos a usar el metodo sync para sincronizar la informacion de nuestra base de datos
db.sync({ force: false }) //devuelve una promesa y la resolvemos con then
    .then(() => console.log("base de datos sincronizada"))
    .catch((error) => console.log(error))

app.get('/', (req, res) => {
    res.status(200).json({message: "Bienvenido al servidor"})
})

//enviamos un status 200  en la linea 10 y luego enviamos un json con un mensaje eso solo sucede cuando se hace un get en la ruta raiz

// definir las rutas de nuestros endpoints (de ahora en adelante ep)
//todas las consultas de usuarios  deberiamos visitar
//localhost:8000/users
//localhost:8000/todos

//get a users
app.get('/users', async (req, res) => {
    try {
        //vamos a obtener el resultado de consultar a todos los usuarios de la base de datos
        const result = await Users.findAll(); //SELECT * FROM users;
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

//obtener un usuario sabiendo su id
app.get('/users/:id', async (req, res) => {
    try {
        console.log(req.params);
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

//obtener un usuario por username
app.get('/users/username/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const result = await Users.findOne({ where: {username} }); //SELECT * FROM users WHERE username = Carlos Tineo
        res.status(200).json(result);
    } catch (error) {
        console.log(error);        
    }
});

//creando un usuario
app.post('/users', async (req, res) => {
    try {
        const user = req.body;
        const result = await Users.create(user);
        res.status(201).json(result);        
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);        
    }
});

// actualizr un usuario, solo podemos cambiar el password
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await Users.update(field, { 
            where: { id },
        });
        res.status(200).json(result); 
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// para eliminar un usuario necesitamos el id
app.delete('/users/:id', async (req, res) => { 
    try {
        const { id } = req.params;
        const result = await Users.destroy({ 
            where: {id}
        });
        res.status(200).json(result); 
} catch (error) {
    res.status(400).json(error.message)
    
}})

// GET A todos
app.get('/todos', async (req, res) => {
    try {
        //vamos a obtener el resultado de consultar a todas los todos de la base de datos
        const result = await Todos.findAll(); //SELECT * FROM todos;
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

//obtener una tarea sabiendo su id
app.get('/todos/:id', async (req, res) => {
    try {
        console.log(req.params);
    const { id } = req.params;
    const result = await Todos.findByPk(id);
    res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

//Creando una tarea en todos

app.post('/todos', async (req, res) => {
    try {
        const todo = req.body;
        const result = await Todos.create(todo);
        res.status(201).json(result);        
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);        
    }
});

// actualizr una tarea, solo podemos actualizar el is_complete
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await Todos.update(field, { 
            where: { id },
        });
        res.status(200).json(result); 
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// para eliminar una tarea necesitamos el id 
app.delete('/todos/:id', async (req, res) => { 
    try {
        const { id } = req.params;
        const result = await Todos.destroy({ 
            where: {id}
        });
        res.status(200).json(result); 
} catch (error) {
    res.status(400).json(error.message)
    
}})

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});

//vamos a terminarlos modelos 
// luego crearemos las relaciones entre los modelos
//depsues nos va enseñar a insertar informacion desde este mismo proyecto


// el viernes vamos a estar haciendo los endpoints y consultas.

// users

//vamos a inserta informacion en nuestra base de datos
//desde nuestroproyecto de node

//consultar la infomacion con endpoints

//seed