const { User } = require('../models');

const postLogin = async (email, password) => {
    const newLogin = await User.findOne({ where: { email, password } });
    console.log(newLogin);
    return newLogin;
};

module.exports = {
    postLogin,
};