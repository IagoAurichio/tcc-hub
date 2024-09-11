const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Importando a instância do Sequelize

// Definindo o modelo de usuário
const User = sequelize.define('User', {
  nome: { type: DataTypes.STRING, allowNull: false },
  telefone: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  instituicao_ensino: { type: DataTypes.STRING },
  senha: { type: DataTypes.STRING, allowNull: false },
});

module.exports = User;