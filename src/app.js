const express = require('express');

const db = require('./database/models');

require('dotenv').config();

const app = express();

db.sequelize.sync({ force: false }).then(() => {
  console.log('Connected to DB');

  const __PORT__ = process.env.PORT || 5000;
  app.listen({ port: __PORT__ }, async () => {
    console.log(`Server started on port ${__PORT__}`);
  });
});
