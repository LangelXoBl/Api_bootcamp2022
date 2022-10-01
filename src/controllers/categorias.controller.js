const Categorias = require('../models/categorias');
exports.getCategorias = async (req, res) => {
  const categorias = await Categorias.findAll();
  return res.send(categorias);
};

exports.oneCategoria = async (req, res) => {
  const {
    params: { id },
  } = req;
  const categoria = await Categorias.findOne({
    where: {
      id,
    },
  });
  if (!categoria)
    return res.status(401).send(`la categoria con id: ${id} no existe`);
  return res.send(categoria);
};

exports.createCategorias = async (req, res) => {
  const { categoria } = req.body;
  const nw = await Categorias.create({ categoria });
  return res.send(nw);
};

exports.updateCategorias = async (req, res) => {
  const { id } = req.params;
  const { categoria } = req.body;
  let result = await Categorias.findOne({
    where: {
      id,
    },
  });
  result.categoria = categoria;
  result = await result.save();
  res.send(result);
};

exports.deleteCategorias = async (req, res) => {
  const { id } = req.params;
  let exist = await Categorias.findOne({
    where: {
      id,
    },
  });
  if (!exist)
    return res.status(401).send(`La categoria con id ${id} no existe`);
  try {
    await exist.destroy();
    res.send({ msg: 'ok' });
  } catch (e) {
    return res.status(500).send({ msg: e.message });
  }
};
