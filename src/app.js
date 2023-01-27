const express = require('express');
const user = require('./controllers/User');
// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', user.postLogin);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
