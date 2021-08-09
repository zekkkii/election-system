const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db')

const partidos = db.define('partidos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  logoPartido: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.BOOLEAN
  }
})

module.exports = partidos