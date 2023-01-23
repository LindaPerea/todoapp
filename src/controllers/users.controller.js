const UserServices = require('../services/users.services');

//esta funcion es un mildeware aqui voy a tener mi req. uy mi res
const getAllUsers = async (req, res) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);createUser       
    }
}

const getUserById = async (req, res) => {
    try { 
        const {id} = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch(error) {
        res.status(400).json(error.message);
    }
}

const getUserWhitTasks = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getWhitTasks(id);
        res.json(result); //defecto se responde con status 200
    } catch (error) {
        res.status(400).json(error.message);        
    }
}

const getUserWhitCategories = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getWhitCategories(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);        
    }
    
}
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await UserServices.update(id, field);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteUSer = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUSer,
    getUserWhitTasks,
    getUserWhitCategories
}