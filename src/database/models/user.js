'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.associate = (models) =>{
    User.belongsTo(models.Rol,{
      as: "rol",
      foreignKey: "rolId"

    });
    User.hasOne(models.Gender,{
      as: "genders",
      foreignKey: "genderId"

    });
    User.hasMany(models.Order,{
      foreignKey : 'userId',
      as : 'orders'
    })
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    genderId: DataTypes.INTEGER,
    rolId: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    brithday: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};