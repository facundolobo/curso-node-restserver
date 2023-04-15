require('dotenv').config();

const { request, response } = require("express");
const jwt = require('jsonwebtoken');


const validarJWT = async(req=request , res= response, next)=>{
    const token = req.header('x-token'); //obtenemos el Token del header

    if(!token){
        return res.status(401).json({
            msg: 'Validar-jwt - No hay token en la petición'
        });
    }
    try{
        
        console.log(token);
        const id = jwt.verify(token, process.env.SECRETPRIVATEKEY); //berificamos si el token no fue manipulado y obtenemos el id del Payload
        
        req.id = id //agregamos el id al req para usarlo en el llamado del SP

        //leer el usuario que corresponde al uid
        next();
    } catch (error) {
    
        console.log(error);
        res.status(401).json({
            msg: 'Validar-jwt - Token no valido'
        })
        
    }
}


module.exports = {
    validarJWT
}