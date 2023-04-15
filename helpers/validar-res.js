const { validationResult } = require("express-validator");
const { response, request } = require('express');

const validaRes = (req = request, res = response)=>{
/*======================================================*/
    /*Verificamos si es un Correo -INICIO*/
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)     
    }
/*Verificamos si es un Correo -FINN*/
/*======================================================*/
}
module.exports={
    validaRes
}