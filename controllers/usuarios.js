const { response, request } = require('express');
const db = require ('../db/connection');
const { respJson } = require('../db/resp-json');



//controlador con llamado a SP de BBDD
const usuariosGet = async(req = request, res = response) => { 
    const { id } = req.id; //obtenemos el id que agrego el valida-jwt.js
    console.log('req.id  usuariosGet = ',req.id )
    let sql = 'call web_getUsuarios( :id )'
    let paramsSql = {
        id : id
    }

    respJson(res,sql,paramsSql)                                                 
}


module.exports = {
    usuariosGet,
}