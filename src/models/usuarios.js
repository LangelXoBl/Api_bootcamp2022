const { DataTypes } = require('sequelize');
const sequelize = require('.')();

const Usuarios = sequelize.define(
  'usuarios',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      field: 'idusuario',
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
    },
    correo: {
      unique: true,
      type: DataTypes.STRING,
    },
    contrasenia: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: 'usuarios',
  }
);

module.exports = Usuarios;
