const {Router} = require('express');

/*Importacion de rutas de controladores*/
const { usuariosGet, 
        usuariosPost,
        usuariosPut, 
        usuariosPatch,
        usuarioIdGet, 
        usuariosDelete } = require('../controllers/usuarios');
const { check } = require('express-validator');

const router = Router(); //obtenemos la funcion router

//agremgamos estas endpoint a el router
router.get('/', usuariosGet );

router.get('/:id', usuarioIdGet);

router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(), //prepara los errores

        check('email', 'El correo no es valido').isEmail() //prepara los errores
], usuariosPost );

router.put('/:id', usuariosPut );

router.patch('/', usuariosPatch );

router.delete('/:id', usuariosDelete );

module.exports = router;