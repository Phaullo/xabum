// arquivo: server.js
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());
app.use(cors({
    origin: '*'
}));
// Rota principal
app.get('/', (req, res) => {
    console.log('API Acessada!')
    res.send('Bem-vindo à minha API!');
});
// Rota de Produtos
app.get('/v1/produtos', (req, res) => {
    console.log('Listando produtos...')
    //Logica para listar produtos
    const todosProdutos = [
        { id: 1, nome: "Notebook Gamer i5", valor: 3999.00 },
        { id: 2, nome: "Mouse Gamer RGB", valor: 189.90 },
        { id: 3, nome: "Teclado Mecânico ABNT2", valor: 299.00 },
        { id: 4, nome: "Monitor 24'' Full HD", valor: 799.99 },
        { id: 5, nome: "Headset com microfone", valor: 249.50 },
        { id: 6, nome: "Webcam Full HD", valor: 199.00 },
        { id: 7, nome: "Cadeira Gamer Reclinável", valor: 1299.00 },
        { id: 8, nome: "Placa de Vídeo RTX 3060", valor: 2799.00 },
        { id: 9, nome: "HD SSD 1TB", valor: 499.00 },
        { id: 10, nome: "Fonte 650W 80 Plus Bronze", valor: 389.90 }
    ]
    // res.send('Lista de produtos!');
    res.json(todosProdutos)
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

