-- Criação do banco de dados
CREATE DATABASE tcchub;

-- Selecionando o banco de dados
USE tcchub;

-- Criação da tabela de usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY, -- ID do usuário, chave primária com auto incremento
    nome VARCHAR(255) NOT NULL,        -- Nome do usuário
    telefone VARCHAR(20),              -- Telefone do usuário
    email VARCHAR(255) NOT NULL UNIQUE, -- Email do usuário, único no sistema
    instituicao_ensino VARCHAR(255),   -- Instituição de ensino do usuário
    senha VARCHAR(255) NOT NULL        -- Senha criptografada do usuário
);
