const router = require('express').Router();
const ctrl = require('../controllers/categorias.controller');
const { auth } = require('../middlewares/auth');

router.get('/', auth, ctrl.getCategorias);
router.post('/', auth, ctrl.createCategorias);

router.get('/:id', auth, ctrl.oneCategoria);
router.put('/:id', auth, ctrl.updateCategorias);
router.delete('/:id', auth, ctrl.deleteCategorias);

module.exports = router;
