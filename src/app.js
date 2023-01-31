const express = require('express');
const user = require('./controllers/User');
const category = require('./controllers/category');
const validateJWT = require('./middleware/validateJWT');
// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', user.postLogin);
app.post('/user', user.postUser);
app.post('/categories', validateJWT.all, category.categoryPost);

app.get('/user/:id', validateJWT.all, user.getOneUser);
app.get('/user', validateJWT.all, user.getUser);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
