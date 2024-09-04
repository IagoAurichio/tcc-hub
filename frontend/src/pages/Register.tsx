import React, { useState } from 'react';
import axios from 'axios';

interface RegisterFormData {
    nome: string;
    telefone: string;
    email: string;
    instituicao_ensino: string;
    senha: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<RegisterFormData>({
        nome: '',
        telefone: '',
        email: '',
        instituicao_ensino: '',
        senha: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/users/register', formData);
            alert(response.data.message);
        } catch (error) {
            alert('Erro ao registrar');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
            <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="text" name="instituicao_ensino" placeholder="Instituição de Ensino" value={formData.instituicao_ensino} onChange={handleChange} />
            <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />
            <button type="submit">Registrar</button>
        </form>
    );
};

export default Register;
