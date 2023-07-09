const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Itens = db.define( 'Itens', {
    concluido: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }, 
    quantidade: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    item: {
        type: DataTypes.STRING, 
        allowNull: false
    }
} )

module.exports = Itens