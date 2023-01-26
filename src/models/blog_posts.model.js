

const blogPostsModel = (sequelize, DataTypes) => {
    const blogPost = sequelize.define('blog_post', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    })
    return blogPost;
}

module.exports = blogPostsModel;