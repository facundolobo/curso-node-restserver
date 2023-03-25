const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => { 
    // forma 2 de obtener los parametros enviados por url QUERY 'localhost:8080/api/usuarios?q=123&nombre=Facu&apikey=44'
    const query = req.query;
    const { q, nombre, apikey } = req.query;

    res.json({
        ok: true,
        msg: 'Get Api - Controller',
        
        q, 
        nombre, 
        apikey
    })                                                             
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;
    res.json({
        ok: true,
        nombre,
        edad
    })                                                             
}

const usuariosPut = (req, res = response) => {
    // forma 1 de obtener los parametros enviados por url 'localhost:8080/api/usuarios/111111'
    const { id } = req.params; 
    res.json({
        id,
        ok: true,
        msg: 'Put Api - Controller'
    })                                                             
}

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Patch Api - Controller'
    })                                                             
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Delete Api - Controller'
    })                                                             
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}