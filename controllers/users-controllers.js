const { response } = require('express');

const usuarioGet = (req, res = response) =>{
    const query = req.query;
    console.log(query);
        res.status(418).json({
          nombre: "nube get - desde el controlador",
          edad: 12,
          query
        });
};


const usuarioPost = (req, res = response) =>{
    const body = req.body;
    console.log(typeof(body));
    res.status(418).json({
      nombre: "nube POST - desde el controlador",
      edad: 12,
      body
    });
};

const usuarioDelete = (req, res = response) =>{
    
    res.status(418).json({
      nombre: "nube DELETE - desde el controlador",
      edad: 12
    });
};

const usuarioPatch = (req, res = response) =>{
    
    res.status(418).json({
      nombre: "nube PATCH - desde el controlador",
      edad: 12
    });
};

const usuarioPut = (req, res = response) =>{
    const id = req.params.id;  

    res.status(418).json({
      nombre: "nube PUT - desde el controlador",
      edad: 12,
      id
    });
};
module.exports = {
    usuarioGet,
    usuarioDelete,
    usuarioPut,
    usuarioPatch,
    usuarioPost
}