const express = require("express");
const cors = require('cors')


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuarioPath = '/api/nube'
    //inicializar
    this.middleware();
    this.router();
  }

  middleware(){
      //la palabra clave para middleware: USE
      this.app.use( express.static('public'));
      //
      this.app.use( cors());
      //parseo el archivo json
      this.app.use( express.json() );
  }

  router(){
    this.app.use(this.usuarioPath, require('../routes/user-route'));
  }

  listen(){
    this.app.listen(this.port, ()=>{
        console.log('Esta escuchando en el puerto',this.port);
    });
  }
}

module.exports = Server;
