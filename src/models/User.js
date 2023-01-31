

const userModel = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        id: { 
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
}, {
    underscored: true,
    tableName: 'users',
    timestamps: false,
})
user.associate = (models) => {
    user.hasMany(models.BlogPost,
        {foreignKey: 'user_id', as: 'blogpost'})
}
    // console.log(user)
    return user
}


module.exports = userModel;