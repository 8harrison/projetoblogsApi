const jwt = require('jsonwebtoken');

require('dotenv/config');
// const { UserService } = require('../service/User');

const secret = process.env.JWT_SECRET || 'qualquercoisa';

module.exports = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        
// console.log(decoded.data);
//         const user = decoded;

        // if (!decoded) {
        //     return res.status(401).json({ message: 'Erro ao procurar usuario do token' });
        // }

        req.user = decoded;

        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};  