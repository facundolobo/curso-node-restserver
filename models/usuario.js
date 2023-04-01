/*Module de usuarios */
const { DataTypes } = require ('sequelize');
const db = require ('../db/connection');


//creacion de modelos, se encarga de crear los sql 
const Usuario = db.define('Usuario', {
    nombre:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.TINYINT
    }
});

module.exports = Usuario;