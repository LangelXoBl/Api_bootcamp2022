const { DataTypes } = require('sequelize');
const sequelize = require('.')();

const Categorias = sequelize.define(
  'Categoria',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      field: 'IDCATEGORIA',
      primaryKey: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
      //fiel: 'CATEGORIA'
    },
  },
  {
    timestamps: false,
    tableName: 'CATEGORIAS',
  }
);

module.exports = Categorias;
