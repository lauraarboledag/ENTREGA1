const { Router } = require('express')
const { createTipoEquipo, getTipoEquipos } = require('../controllers/TipoEquipo')

const router = Router()

// crear
router.post('/', createTipoEquipo)

// editar
//router.put('/', updateTipoEquipo)

// listar
router.get('/', getTipoEquipos)

module.exports = router