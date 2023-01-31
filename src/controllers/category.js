const CategoryService = require('../service/category');

const categoryPost = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }
    const newCategory = await CategoryService.categoryPost(name);
    return res.status(201).json(newCategory);
};

module.exports = {
    categoryPost,
};