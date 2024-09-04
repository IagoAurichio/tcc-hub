const bcrypt = require('bcrypt');
const User = require('../models/User');

// Registro de novo usuário
const registerUser = async (req, res) => {
  const { nome, telefone, email, instituicao_ensino, senha } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);

    const newUser = await User.create({
      nome,
      telefone,
      email,
      instituicao_ensino,
      senha: hashedPassword,
    });

    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar o usuário', error });
  }
};

// Login do usuário com sessão
const loginUser = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'Email não encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Senha incorreta' });
    }

    req.session.userId = user.id; // Salvando a sessão
    res.status(200).json({ message: 'Login bem-sucedido!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login', error });
  }
};

module.exports = { registerUser, loginUser };
