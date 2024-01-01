'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
const {SALT} = require('../config/serverconfig')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Url, { foreignKey: 'userId' });

    }
  }
  User.init({
    username: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
    }
    ,
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) =>{
    const encryptPassword = bcrypt.hashSync(user.password,SALT);
    user.password = encryptPassword;
  })
  return User;
};