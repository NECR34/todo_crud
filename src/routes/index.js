const userRoutes = require('./appRoutes');

const apiRouter = (app) => {
  app.use(userRoutes);
}

module.exports = apiRouter;