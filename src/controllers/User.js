const jwt = require('jsonwebtoken');

const userService = require('../service/User.js');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'qualquercoisa';

const postLogin = async (req, res) => { 
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  const newLogin = await userService.postLogin(email, password);
  if (!newLogin) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const token = jwt.sign({ newLogin }, secret, jwtConfig);
  return res.status(200).json({ token });

  // return res.status(erro.status).json({ message: erro.message });
};

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  // if (displayName.length < 8) {
  //     return res.status(400)
  //     .json({ message: '"displayName" length must be at least 8 characters long' });
  // }
  try {
    const newUser = await userService.postUser({
      displayName,
      email,
      password,
      image,
    });
    const token = jwt.sign({ newUser }, secret, jwtConfig);
    res.status(201).json({ token });
  } catch (erro) {
    res.status(erro.status).json({ message: erro.message });
  }
};

const getUser = async (req, res) => {
    const getUsers = await userService.getUser();
    const users = getUsers.map((user) => (
        { id: user.id, 
           displayName: user.displayName, 
           email: user.email, 
           image: user.image }
   ));
    // const token = jwt.sign({ users }, secret, jwtConfig);
    return res.status(200).json(users);
};
module.exports = {
  postLogin,
  postUser,
  getUser,
};
