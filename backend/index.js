const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');
const {connectDB} = require('./config/db');

// Carregar variáveis de ambiente
dotenv.config();

// Inicializar o app Express
const app = express();


app.use(cors());
// Middleware para aceitar requisições com JSON
app.use(express.json());

// Configuração de sessão
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // False para desenvolvimento
}));

// Conectar ao banco de dados
connectDB();

// Rotas
app.use('/api/users', userRoutes);

// Porta do servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
