
const {Router} = require('express');
const {usersController} = require('../controllers/usersController');
const {todosController} = require('../controllers/todosController');

const router = Router();

// Ruta para crear usuarios
router.post('./user', usersController.createUser);

// Ruta para que un usuario pueda crear tareas
router.post('/user/:userId/tasks', todosController.createTask);

// Ruta para obtener todas las tareas de un usuario incluyendo sus categorías
router.get('/user/:userId/tasks', todosController.getUserTasks);

// Ruta para cambiar el atributo completed de una tarea
router.patch('/user/:userId/tasks/:taskId', todosController.updateTaskCompletion);

// Ruta para eliminar tareas
router.delete('/user/:userId/tasks/:taskId', todosController.deleteTask);

module.exports = router;
