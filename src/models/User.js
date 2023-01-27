

const userModel = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        display_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
}, {
    underscored: true,
    tableName: 'users',
    timestamps: false,
})
    // console.log(user)
    return user
}


module.exports = userModel;