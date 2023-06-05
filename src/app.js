const express = require('express');
const apiRoutes = require('./routes');
const usersController = require('./controllers/usersController');
const todosController = require('./controllers/todosController');


const PORT = process.env.PORT || 8000;




const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome')
})

app.post('/users', usersController.createUser);
app.post('/users/:userId/tasks', todosController.createTask);

apiRoutes(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})