const sequelize = require('sequelize')
const Itens = require('../models/Itens')

module.exports = class ControllerCompras {
    static async getHome (req, res) {
        const quantidadeDeItens = await Itens.findAll({
            attributes: [
                [
                    sequelize.fn( 'COUNT', sequelize.col('id') ),
                    'quantidadeDeItens'
                ]
            ],
            raw: true
        })
        .catch((error) => console.log(error))

        const concluidas = await Itens.findAll({
            where: { concluido: true },
            raw: true
        }) 
        .catch((error) => console.log(error))

        const naoConcluidas = await Itens.findAll({
            where: { concluido: false },
            raw: true
        })
        .catch((error) => console.log(error))
        
        res.render('home', { quantidadeDeItens: quantidadeDeItens[0], concluidas, naoConcluidas})
    }
    static async getEdit (req, res) {
        const { id } = req.params

        await Itens.findOne( 
            {
                where: {
                    id: id
                },
                raw: true
            }
         ) 
        .then( (data) => {
            res.render('edit', { data })
        })
        .catch((error) => console.log(error))

    }

    static async postCreate (req, res) {
        const { item, quantidade } = req.body
        const data = {
            concluido: false,
            item, 
            quantidade
        }

        await Itens.create(data)
        .then(() => {
            res.redirect('/')
        })
        .catch((error) => console.log(error))
    }

    static async postEditConcluido (req, res) {
        const { id } = req.params
        let { concluido } = req.body

        concluido = concluido === 'on' ? true : false

        await Itens.update(
            {
                concluido, 
            },
            {
                where: {
                    id: id
                },
                raw: true
            }
        )
        .then(() => {
            res.redirect('/')
        })
        .catch((error) => console.log(error))
    }

    static async postEditItem (req, res) {
        const { id } = req.params
        const { quantidade, item } = req.body

        const data = {
            quantidade, 
            item
        }

        await Itens.update(
            data,             
            {
                where: { id: id }, 
                raw: true
            }
        )
        .then(() => {
            res.redirect('/')
        })
        .catch((error) => console.log(error))
    }

    static async delete (req, res) {
        const { id } = req.params
        await Itens.destroy({
            where: { id: id }, 
            raw: true
        })
        .then(() => {
            res.redirect('/')
        })
        .catch((error) => console.log(error))
    }
}