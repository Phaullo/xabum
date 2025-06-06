// Modelo de criação de 1 produto
// POST /api/produto
{
  "nome": "Notebook Lenovo",
  "preco": 3499.99,
  "codigo_barras": "1234567890123",
  "quantidade": 15,
  "descricao": "Notebook com 8GB RAM, SSD 256GB",
  "imagemUrl": "https://example.com/notebook.jpg",
  "criarLote": false
}


// Modelo de criação de mais de 1 produtos
// POST /api/produto

{
  "criarLote": true,
  "lote": [
    {
      "nome": "Mouse Gamer",
      "preco": 199.90,
      "codigo_barras": "9876543210001",
      "quantidade": 50,
      "descricao": "Mouse com iluminação RGB",
      "imagemUrl": "https://example.com/mouse.jpg"
    },
    {
      "nome": "Teclado Mecânico",
      "preco": 299.99,
      "codigo_barras": "9876543210002",
      "quantidade": 30,
      "descricao": "Teclado com switches azuis",
      "imagemUrl": "https://example.com/teclado.jpg"
    }
  ]
}



// Consulta por ID (GET /produto?idProduto=1)
// Consulta por nome (GET /produto?nome=Notebook)
// Consulta geral (GET /produto) 


// Edição de produtos (PUT /produto )
{
  "idProduto": 1,
  "nomeProduto": "Notebook Lenovo Ideapad",
  "precoProduto": 3599.99,
  "codigo_barras": "1234567890123",
  "quantidade": 20,
  "descricao": "Notebook atualizado com SSD 512GB",
  "imagemUrl": "https://example.com/notebook512.jpg"
}


// Apagar produto (DELETE /produto )
{
  "idProduto": 1
}

