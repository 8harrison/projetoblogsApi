

const userModel = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        display_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    })
    return user
}

module.exports = userModel;