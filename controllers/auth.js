const { response, request } = require('express');
const { validationResult } = require('express-validator');
const db = require ('../db/connection');
const { generarJWT } = require('../helpers/generar-jwt');
const { validaRes } = require('../helpers/validar-res');
const { respJsonAuth } = require('../db/resp-auth-json');



const login = async(req = request, res = response) => { 

    /*======================================================*/
    /*Verificamos si es un Correo -INICIO*/
    const validErr = validaRes(req,res);
    if( validErr ) {
        return validErr
    }
    /*Verificamos si es un Correo -FINN*/
    /*======================================================*/


    const {email, password} = req.body; //obtenemos el email y password


    let sql = 'call web_validarUserEmailPass( :email, :password )'
    let paramsSql = {
        email,
        password
    }
    console.log(paramsSql)
    respJsonAuth(res,sql,paramsSql)  

}

const revalidarToken = async(req = request, res = response)=>{
    const { id } = req.id; //obtenemos el id que agrego el valida-jwt.js

    let sql = 'call web_validarUserId( :id)'
    let paramsSql = {
        id
    }
    console.log(paramsSql)
    respJsonAuth(res,sql,paramsSql) 

}

module.exports = {
    login,
    revalidarToken
}