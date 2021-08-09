const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db')

const candidatos = db.define('candidatos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING
  },
  apellido: {
    type: DataTypes.STRING
  },
  fotoPerfil: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.BOOLEAN
  }
})

module.exports = candidatos