

const blogPostsModel = (sequelize, DataTypes) => {
    const blogPost = sequelize.define('BlogPost', {
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },{
        tableName: 'blog_posts',
        underscored: true,
        timestamps: false,
    })
    blogPost.associate = (models) => {
        blogPost.belongsTo(models.User,
            {foreignKey: 'user_id', as: 'user'})
    }
    return blogPost;
}

module.exports = blogPostsModel;