const { Router } = require('express')
const { createEstadoEquipo, getEstadoEquipo } = require('../controllers/estadoEquipo')

const router = Router()

// crear
router.post('/', createEstadoEquipo)

// editar
//router.put('/', updateTipoEquipo)

// listar
router.get('/', getEstadoEquipo)

module.exports = router