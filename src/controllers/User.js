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
            return res.status(400)
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

module.exports = {
    postLogin,
};