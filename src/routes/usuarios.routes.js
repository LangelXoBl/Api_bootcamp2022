const router = require('express').Router();
const ctrl = require('../controllers/usuarios.controllers');
const { auth } = require('../middlewares/auth');

router.get('/usuarios', auth, ctrl.getUsuarios);
router.post('/login', ctrl.login);

module.exports = router;
