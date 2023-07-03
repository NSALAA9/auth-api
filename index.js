'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3003

const app = require('./src/server');
db.sync().then(() => {
    app.start(PORT);
   
  });