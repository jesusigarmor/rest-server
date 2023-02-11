const express = require('express');
const cors = require('cors');

class Server {


    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/user';

        // Middlewares
        this.middlewares()

        // Rutas
        this.routes()
    };

    middlewares() {


        //Cors
        this.app.use(cors());

        // Parseo y lectura del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    };

    routes() {

        this.app.use(this.usuariosPath, require('../routes/user'));

    };

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en puerto', this.port);
        });
    }
};



module.exports = Server;