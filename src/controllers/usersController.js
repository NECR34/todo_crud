const { User, Todo, Category } = require('../models/user');

// Controlador para crear un nuevo usuario
async function createUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
}

// Otros controladores para usuarios...

module.exports = {
  createUser,
  // Otros controladores para usuarios...
};
