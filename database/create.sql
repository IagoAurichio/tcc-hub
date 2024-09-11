-- Criação do banco de dados
CREATE DATABASE tcchub;

-- Selecionando o banco de dados
USE tcchub;

-- Criação da tabela de usuários
CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  email VARCHAR(255) NOT NULL UNIQUE,
  instituicao_ensino VARCHAR(255),
  senha VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);