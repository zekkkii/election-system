const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db')

const ciudadanos = db.define('ciudadanos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  documentoIdentidad: {
    type: DataTypes.STRING,
  },
  nombre: {
    type: DataTypes.STRING
  },
  apellido: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.BOOLEAN
  }
})

module.exports = ciudadanos