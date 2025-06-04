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
];
function exibirProdutos(listaProdutos) {
    const divCentral = document.getElementById('todosProdutos')
    divCentral.innerHTML =""

    listaProdutos.forEach((produto) => {
        let criarCard = document.createElement('div')
        criarCard.classList.add('product-card');

        let criarH3 = document.createElement('h3')
        criarH3.textContent = produto.nome

        let criarP = document.createElement('p')
        criarP.textContent = produto.valor

        criarH3.appendChild(criarP)
        criarCard.appendChild(criarH3)
        divCentral.appendChild(criarCard)
    })
}


function configurarBusca() {
  const campoBusca = document.getElementById('buscaProdutos');

  campoBusca.addEventListener('input', () => {
    const valorBuscado = campoBusca.value.toLowerCase();

    const filtrados = todosProdutos.filter(produto =>
      produto.nome.toLowerCase().includes(valorBuscado)
    );

    exibirProdutos(filtrados);
  });
}

exibirProdutos(todosProdutos)
configurarBusca() 