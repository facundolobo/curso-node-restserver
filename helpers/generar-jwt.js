const jwt = require('jsonwebtoken');

const generarJWT = (id = '')=>{
     return new Promise((resolve, reject) =>{
        const payload = { id };//Creamos un payload con el "id" del usuario
        jwt.sign( payload, process.env.SECRETPRIVATEKEY,{
                    expiresIn: '1h' //agregamos el tiempo de token
                    }, (err, token) => {
                    
                        if(err){
                            console.log(err); 
                            reject('No se pudo generar el token') 
                        } else {
                            resolve (token);//devolvemos el token
                        }

                })
            
     })
}


module.exports={
    generarJWT
}