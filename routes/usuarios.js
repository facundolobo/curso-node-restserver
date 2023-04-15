const {Router} = require('express');

/*Importacion de rutas de controladores*/
const { usuariosGet} = require('../controllers/usuarios');


const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router(); //obtenemos la funcion router

//agremgamos estas endpoint a el router

router.get('/',[
        validarJWT, //validacion de Token
        check('nombre', 'El nombre es obligatorio').not().isEmpty(), //prepara los errores
        check('email', 'El correo no es valido').isEmail() //prepara los errores
], usuariosGet );


module.exports = router;