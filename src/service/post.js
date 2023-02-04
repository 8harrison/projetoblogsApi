const Joi = require('joi');
const { BlogPost, Category, PostCategory } = require('../models');
// const blogPost = require('../models/BlogPost');

const schema = Joi.object({
    title: Joi.string().required().label('title'),
    content: Joi.string().required().label('content'),
    categoryIds: Joi.array().required().label('categoryIds'),
}).messages({
    'string.empty': 'Some required fields are missing',
    'string.required': 'Some required fields are missing',
    'array.required': 'one or more "categoryIds" not found',
});

const verificaCategoryIds = async (categoryIds) => {
    const teste = categoryIds.map(async (id) => {
        const categoria = await Category.findByPk(id);
        if (categoria) return true;
        return false;
    });
    const testeResolvePromise = await Promise.all(teste);
    console.log(testeResolvePromise);
    return testeResolvePromise;
};
const post = async ({ title, content, categoryIds }) => {
    const { error } = schema.validate({ title, content, categoryIds });
    // console.log(error);
    if (error) {
        const err = { status: 400, message: error.message };
        throw err;
    } 
    
    // const verificaCategorias = categoryIds.map((id) => {
    //     const categoria = Category.findOne({ where: { id } });
    //     if (categoria) return true;
    //     return false;
    // });
    const array = await verificaCategoryIds(categoryIds);
    // console.log({ array });
// console.log(verificaCategorias);
    if (array.includes(false)) {
        const erro = { status: 400, message: 'one or more "categoryIds" not found' };
        throw erro;
    }
    // const emailJaExiste = await postCategoryModel.findOne({ where: { email } });
    // if (emailJaExiste) {
    //     const err = { status: 409, message: 'User already registered' };
    //     throw err;
    // }
    const newPost = await BlogPost.create({ title, content, categoryIds });
    const category = categoryIds.map((id) => ({ postId: newPost.id, categoryId: id }));
    await PostCategory.bulkCreate(category);
        return newPost;
};

const get = async () => {
    const getPosts = await BlogPost.findAll();
    return getPosts;
};

module.exports = {
    post,
    get,
};