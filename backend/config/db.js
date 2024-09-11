const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tcchub', 'root', 'imtdb', {
  host: 'localhost',
  dialect: 'mysql', 
});


const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    process.exit(1);
  }
};

// Exportando tanto a função de conexão quanto o sequelize
module.exports = { connectDB, sequelize };