require('dotenv').config();
const Server = require("./models/server");

const server = new Server(); //Creamos un objeto de la clase server

server.lister();
