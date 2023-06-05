const { User, Todo, Category } = require('../models/todo');

// Controlador para crear una nueva tarea para un usuario
async function createTask(req, res) {
  try {
    const { userId } = req.params;
    const { title, description, completed, categoryId } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    const newTask = await Todo.create({ title, description, completed, userId });
    await newTask.addCategory(category);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' });
  }
}

// Otros controladores para tareas...

module.exports = {
  createTask,
  // Otros controladores para tareas...
};
