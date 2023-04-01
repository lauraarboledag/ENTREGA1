const { Router } = require('express')
const {createUsuario, getUsuario} = require('../controllers/usuario')

const router = Router()

// crear
router.post('/', createUsuario)

// consultar todos
router.get('/', getUsuario)

module.exports = router;