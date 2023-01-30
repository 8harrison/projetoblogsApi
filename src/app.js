const express = require('express');
const user = require('./controllers/User');
const validateJWT = require('./middleware/validateJWT');
// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', user.postLogin);
app.post('/user', user.postUser);

app.get('/user', validateJWT, user.getUser);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
