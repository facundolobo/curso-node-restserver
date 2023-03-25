require('dotenv').config();
const cors = require('cors'); //para cors
const express = require('express');//para generar un server

class Server{
    constructor(){
        this.app = express(); //Crear en la clase servidor una instancia de una app de express   
        this.port = process.env.PORT;
        
        /*definimos path de Rutas*/
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        
        //Lectura y parseo del body
        this.app.use( express.json() );

        //Directorio Público 
        this.app.use( express.static('public') ); //publicamos la carpeta publica
    } 

    //creamos un metodo para devolver las rutas
    routes(){
          
          //agregar una lista de rutas para una funcionalidad
          this.app.use( this.usuariosPath , require('../routes/usuarios'));
    }

    lister(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en opuerto', this.port );
        });
    }
}

module.exports = Server;