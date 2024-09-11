const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async (req, res) => {
  const { nome, telefone, email, instituicao_ensino, senha } = req.body;

  console.log('Dados recebidos no backend:', req.body); // Adicione isso para ver os dados

  try {
    // Verifica se o usuário já existe
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'Usuário já registrado' });
    }

    // Criptografar a senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);

    // Criar um novo usuário
    const newUser = await User.create({
      nome,
      telefone,
      email,
      instituicao_ensino,
      senha: hashedPassword,
    });

    res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
  } catch (error) {
    console.error('Erro no backend:', error); // Verificar o erro no backend
    res.status(500).json({ message: 'Erro no servidor' });
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
