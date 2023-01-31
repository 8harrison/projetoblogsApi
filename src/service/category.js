const { Category } = require('../models');

const categoryPost = async (name) => {
    const newUser = await Category.create({ name });
    // console.log(newUser);
        return newUser;
};

module.exports = {
    categoryPost,
};