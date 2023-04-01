const { response, request } = require('express');
const Usuario = require('../models/usuario');
const db = require ('../db/connection');

const bcrypt = require('bcryptjs');//para contraseña
const { validationResult } = require('express-validator');


const usuariosGet = async(req = request, res = response) => { 

    const usuarios = await Usuario.findAll();
    try {
        res.json({
            ok: true,
            msg: 'Get Api - Controller',
            usuarios
        }) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable conm el administrador'
        })  
    }

                                                            
}

const usuarioIdGet = async(req = request, res = response) => { 
/*
    const usuario = await Usuario.findByPk(id);
    res.json({
        ok: true,
        msg: 'Get Api - Controller',
        usuario
    })  
*/
    const { id } = req.params;
    await db.query("CALL getUsuarioId(:id)",
            {replacements: { id: id }})
    .then(results => {
        res.json({
            ok: true,
            msg: 'usuarioIdGet Api - Controller',
            results
        })
    })
    .catch(err =>{
        res.status(400).json(err);
    })
                                                           
}

const usuariosPost = async (req, res = response) => {

    /*======================================================*/
    /*Verificamos si es un Correo -INICIO*/
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)     
    }
    /*Verificamos si es un Correo -FINN*/
    /*======================================================*/
    const {password} = req.body; 

    //encreyptar contraseña
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash)
       res.json({
            ok: true,
            msg: 'Post Api - Controller',
            hash
        })

    // try {

    //     //verificar que no existe email
    //     const existeEmail = await Usuario.findOne({
    //         where : {
    //             email: body.email
    //         }
    //     });

    //     if (existeEmail){
    //         return res.status(400).json({
    //             ok: false,
    //             msg: 'Ya existe un usuario con ese email' + body.email
            
    //         })
    //     }

    //     const usuario = new Usuario(body)//creamo una instancia de la clase 
        
    //     await usuario.save();//funcion para guardar
    //     res.json({
    //         ok: true,
    //         msg: 'Post Api - Controller',
    //         usuario
    //     })

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({
    //         msg: 'Hable conm el administrador'
    //     }) 
    // }                                                            
}

const usuariosPut = async(req, res = response) => {
    // forma 1 de obtener los parametros enviados por url 'localhost:8080/api/usuarios/111111'
    const { id } = req.params; 
    const  body  = req.body;
    console.log(id)
    console.log(body)

    try {
        
        //buscamios al usuario
        const usuario = await Usuario.findByPk(id)
        
        if (!usuario){
            return res.status(404).json({
                ok: false,
                msg: 'No se enciontro usuario id =' + id
            
            })
        }
        //verificar que no existe email
        await usuario.update( body );
        res.json({
            ok: true,
            msg: 'Put Api - Controller',
            usuario
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable conm el administrador'
        }) 
    }                                                                 
}

const usuariosPatch = async(req, res = response) => {
    
/*
  await db.query("call getUsuarios();").then(results => {
        res.json({
            ok: true,
            msg: 'Patch Api - Controller',
            results
        }).error(err =>
            {
            res.json(err);
        });
    });
*/

    await db.query("CALL getUsuarios();")
    .then(results => {
        res.json({
            ok: true,
            msg: 'Patch Api - Controller',
            results
        })
    })
    .catch(err =>{
        res.json(err);
    })
                                                           
}

const usuariosDelete = async(req, res = response) => {
    const { id } = req.params; 

    try {
        
        //buscamios al usuario
        const usuario = await Usuario.findByPk(id)
        
        if (!usuario){
            return res.status(404).json({
                ok: false,
                msg: 'No se enciontro usuario id =' + id
            
            })
        }

        //eliminacion fisica
        //await usuario.destroy();
        
        await usuario.update({
            estado: 0
        })

        res.json({
            ok: true,
            msg: 'Delete Api - Controller',
            usuario
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable conm el administrador'
        }) 
    }                                                                     
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    usuarioIdGet
}