const Usuarios = require('../models/usuarios');
const jwt = require('jsonwebtoken');

exports.getUsuarios = async (req, res) => {
  const users = await Usuarios.findAll();
  res.json(users);
};

exports.login = async (req, res) => {
  try {
    const {
      body: { correo, contrasenia },
    } = req;
    const usuario = await Usuarios.findOne({
      where: {
        correo,
        contrasenia,
      },
    });

    if (!usuario) {return send.status(401).send('El usuario no existe');}

    const token = jwt.sign(usuario.toJSON(), process.env.SECRET, {
      expiresIn: '7d',
    });

    const {contrasenia:_, ...userToken} = usuario.toJSON();
    res.status(200).json({
      ...userToken,
      token
    });
  } catch (Error) {
    res.status(500).send(Error.message);
  }
};
