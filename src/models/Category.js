const categoriesModel = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        name: DataTypes.STRING
    }, {
        underscored: true,
        tableName: 'categories',
        timestamps: false,
    })
    return category
}

module.exports = categoriesModel;