const { Router } = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUSer, getUserWhitTasks } = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { getUserWhitCategories } = require('../services/users.services');

const router = Router();

router.get('/users',authMiddleware, getAllUsers);

router.get('/users/:id', authMiddleware, getUserById);

//obtener a un usuario con sus tareas 
router.get('users/:id/todos',authMiddleware, getUserWhitTasks);

router.get('users/:id/categories', getUserWhitCategories )

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id',authMiddleware, deleteUSer);



module.exports = router;