const { Category } = require('../models');

const categoryPost = async (name) => {
    const newUser = await Category.create({ name });
    // console.log(newUser);
        return newUser;
};

const categoryGet = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    categoryPost,
    categoryGet,
};