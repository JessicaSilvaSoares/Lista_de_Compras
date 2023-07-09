const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'ListaDeCompras', 
    'root', 
    '', 
    {
        host: 'localhost', 
        dialect: 'mysql'
    }
)

module.exports = sequelize