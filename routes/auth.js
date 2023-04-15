const {Router} = require('express');
const { check } = require('express-validator');
const { login, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');



const router = Router(); //obtenemos la funcion router

router.post('/login', [
   
    check('email', 'El email no es valido').isEmail(), //prepara los errores
    check('password', 'la password es obligatoria').not().isEmpty(), //prepara los errores
    
], login); //llamamos al controlador

router.get('/renew', [
    validarJWT
], revalidarToken); //llamamos al controlador

module.exports = router; 