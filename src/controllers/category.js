const CategoryService = require('../service/category');

const categoryPost = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }
    const newCategory = await CategoryService.categoryPost(name);
    return res.status(201).json(newCategory);
};

const categoryGet = async (req, res) => {
    const categories = await CategoryService.categoryGet();
    res.status(200).json(categories);
};

module.exports = {
    categoryPost,
    categoryGet,
};