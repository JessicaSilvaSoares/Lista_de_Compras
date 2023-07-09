const express = require('express')
const router = express.Router()
const controllerCompras = require('../controller/Compras')

router.get( '/', controllerCompras.getHome )
router.post( '/create', controllerCompras.postCreate )
router.get( '/edit/:id', controllerCompras.getEdit )
router.post( '/edit/:id', controllerCompras.postEditItem )
router.post( '/edit-concluido/:id', controllerCompras.postEditConcluido )
router.get( '/delete/:id', controllerCompras.delete)

module.exports = router