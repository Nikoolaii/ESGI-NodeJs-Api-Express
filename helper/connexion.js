const Sequelize = require('sequelize');
require('dotenv').config();

const bdd = new Sequelize(
  process.env.MARIA_DB_DATABASE,
  process.env.MARIA_DB_USER,
  process.env.MARIA_DB_PASSWORD,
  {
    host: process.env.MARIA_DB_HOST,
    port: process.env.MARIA_DB_PORT,
    dialect: 'mariadb',
    logging: false,
  }
);

let connect = async () => {
  try {
    await bdd.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { bdd, connect };