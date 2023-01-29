const Joi = require('joi');
const { User } = require('../models');

const postLogin = async (email, password) => {
    const newLogin = await User.findOne({ where: { email, password } });
    console.log(newLogin);
    return newLogin;
};
const schema = Joi.object({
    displayName: Joi.string().min(8).required().label('displayName'),
    email: Joi.string().email().required().label('email'),
    password: Joi.string().min(6).required().label('password'),
}).messages({
    'any.required': '{#label} is required',
    'string.min': '{#label} length must be at least {#limit} characters long',
});

const postUser = async ({ displayName, email, password, image }) => {
    const { error } = schema.validate({ displayName, email, password });
    console.log(error);
    if (error) {
        const err = { status: 400, message: error.message };
        throw err;
    } 
    const emailJaExiste = await User.findOne({ where: { email } });
    if (emailJaExiste) {
        const err = { status: 409, message: 'User already registered' };
        throw err;
    }
    const newUser = await User.create({ displayName, email, password, image });
        return newUser;
};

module.exports = {
    postLogin,
    postUser,
};