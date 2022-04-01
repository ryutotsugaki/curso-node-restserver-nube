const { Router } = require("express");
const { usuarioGet, usuarioDelete, usuarioPost, usuarioPatch, usuarioPut} = require("../controllers/users-controllers");
const router = Router();

//GET
router.get('/', usuarioGet);
// PUT
  router.put('/:id', usuarioPut);
//DELETE
  router.delete('/', usuarioDelete);
// PATCH
  router.patch('/', usuarioPatch);

  //POST
  router.post('/', usuarioPost);


module.exports = router;