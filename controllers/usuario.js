const usuario = require('../models/usuario')
const {request, response} = require('express')

/**
 * Creación
 */
const createUsuario = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
        console.log(req.body)
        ? req.body.nombre.toUpperCase()
        : ''
        const usuarioBD = await usuario.findOne({nombre})
        if(usuarioBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre
        }
        const Usuario = new usuario(data)
        //console.log(tipoEquipo)
        await Usuario.save()
        return res.status(201).json(Usuario)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }

}

/**
 * Edición
 */

/**
 * Listar todos
 */
const getUsuario = async (req = request, 
    res = response) => {
    try{
        const { estado } = req.query;

        const usuarioDB = await usuario.find({estado})
        //select * from tipoequipo where estado = ?;
        return res.json(usuarioDB)
    }catch(e){
        return res.status(500).json({
            msg: e
        }) 
    }
}

module.exports = {createUsuario, getUsuario}