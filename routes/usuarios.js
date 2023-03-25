const {Router} = require('express');

/*Importacion de rutas de controladores*/
const { usuariosGet, 
        usuariosPost,
        usuariosPut, 
        usuariosPatch, 
        usuariosDelete } = require('../controllers/usuarios');

const router = Router(); //obtenemos la funcion router

//agremgamos estas endpoint a el router
router.get('/', usuariosGet );

router.post('/', usuariosPost );

router.put('/:id', usuariosPut );

router.patch('/', usuariosPatch );

router.delete('/', usuariosDelete );

module.exports = router;