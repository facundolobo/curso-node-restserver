const { generarJWT } = require("../helpers/generar-jwt");
const db = require("./connection");
const { response, request } = require('express');

const respJsonAuth= async( res = response, sql, paramsSql )=> {
        //peticion SQL a BBDD

       try {
        const resp = await db.query(sql, {replacements: paramsSql} ); //obtenemos la resp que es "id" del usuario
        console.log(resp[0].Usu_Id)
        //Generamos el token
        const token = await generarJWT( resp[0].Usu_Id )
        
        //Error no controlado en BD
        if ( resp == null ){
            //generacion del  error 
            throw ({
                    msg: 'No se Definio este error',
                    estado: 500    
            })
        }


        //Error controlado en BD
        if (resp[0]?.estado){
            //generacion del  error 
            throw ({
                    estado: resp[0].estado,
                    msg:resp[0].msg    
            })
        }
        
        res.json({
            ok: true, //Todo salio bien
            msg: 'respJsonAuth - Helper',
            resp: [{token}]
        })

    } catch (error) {
        if(!error.msg){
            error.msg = 'Error Desconocido'
        }

        if(!error.estado){
            error.estado = 500
        }
        res.status(error.estado).json({
            ok: false,//algo salio mal
            msg: error.msg
        })
    }
}
module.exports={
    respJsonAuth
}