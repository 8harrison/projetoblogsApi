const categoriesModel = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        name: DataTypes.STRING
    })
    return category
}

module.exports = categoriesModel;