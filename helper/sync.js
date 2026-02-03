const { bdd } = require('./connexion');
const associate = require('./associate');

const sync = async () => {
  await associate();
  await bdd.sync({});
}

sync();