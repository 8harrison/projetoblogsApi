const postCategoryModel = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "PostCategory",
    {
      postId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
      } ,
      categoryId:{
        type: DataTypes.INTEGER,
        primaryKey: true,

      } 
    },
    {
      underscored: true,
      tableName: "posts_categories",
      timestamps: false,
    }
  );
  post.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
    //   foreignKey: "post_id",
      as: "categoryPost",
      through: post,
      foreignKey: "postId",
      otherKey: "categoryId",
    });
    // post.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
        //   foreignKey: "post_id",
          as: "posts",
          through: post,
          foreignKey: "categoryId",
          otherKey: "postId",
        });
    //   };
    }
      
  return post;
};

module.exports = postCategoryModel;
