// arquivo: server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    console.log('API Acessada!')
    res.send('Bem-vindo à minha API!');
});
// Rota de Produtos
app.get('/produtos', (req, res) => {
    console.log('Listando produtos...')
    //Logica para listar produtos
    res.send('Lista de produtos!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

