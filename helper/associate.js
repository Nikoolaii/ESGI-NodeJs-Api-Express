const User = require('../modules/user/user.model')
const Message = require('../modules/message/message.model')

const associate = async () => {
  User.hasMany(Message, { foreignKey: 'userId' })
  Message.belongsTo(User, { foreignKey: 'userId' })
}

module.exports = associate;