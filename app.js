const express = require('express')
const app = express()
const userRouter = require('./modules/user/user.route')
const messageRouter = require('./modules/message/messsage.route')
const { connect } = require('./helper/connexion')
const associate = require('./helper/associate')

const startBdd = async () => {
  await connect()
}
startBdd()

app.use(express.json())

app.use('/message', messageRouter)
app.use('/user', userRouter)

module.exports = app