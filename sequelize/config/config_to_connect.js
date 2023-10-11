const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('test_db_softenq', 'postgres', '161971', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432'
})

module.exports = sequelize;