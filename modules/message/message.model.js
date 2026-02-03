const { DataTypes } = require('sequelize');
const { bdd } = require('../../helper/connexion');

const Message = bdd.define('Message', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  tableName: 'message',
});

module.exports = Message;