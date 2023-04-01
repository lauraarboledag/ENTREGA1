const express = require('express')
const app = express()
const cors = require(`cors`)

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin:`*`
}))

const tipoEquipo = require('./routes/tipoEquipo')
const estadoEquipo = require(`./routes/estadoEquipo`)
const usuario = require(`./routes/usuario`)
const marca = require(`./routes/marca`)
const inventario = require(`./routes/inventario`)

// URI o endpoint
app.use('/api/tipoequipo', tipoEquipo)
app.use(`/api/estadoequipo`, estadoEquipo)
app.use(`/api/usuario`, usuario)
app.use(`/api/marca`, marca)
app.use(`/api/inventario`, inventario)

module.exports = app