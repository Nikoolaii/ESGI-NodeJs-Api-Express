const { DataTypes } = require('sequelize');
const { bdd } = require('../../helper/connexion');

const User = bdd.define('User', {
  firstname: {
    type: DataTypes.STRING(255),
  },
  lastname: {
    type: DataTypes.STRING(255),
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(511),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(256),
    allowNull: false,
  }
}, {
  tableName: 'users',
});

module.exports = User;