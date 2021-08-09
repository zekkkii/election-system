const Sequelize = require("sequelize")

const config = {
  dbName: 'election system',
  dbUser: 'root',
  dbPassword: '',
  port: 3307
}

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  dialect: "mysql",
  host: "localhost",
  port: config.port
});

module.exports = sequelize