const Sequelize = require('sequelize')
const sequelize = require('../db')

const Company = sequelize.define('companies', {
  name: {
    type: Sequelize.TEXT,
    field: 'name',
    allowNull: false
  }, 
  founding_year: {
    type: Sequelize.INT,
    field: 'founding year',
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    field: 'description',
    allowNull: true
  } 
})

module.exports = Company