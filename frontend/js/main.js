const todosProdutos = [];

async function showSection(id) {
  console.log('Página clicada: ', id)
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  
  if (id=='produtos'){
    const consultarBackEnd = await fetch('http://localhost:3000/v1/produtos' )
    const converteJSON = await consultarBackEnd.json()
    console.log(converteJSON)
    converteJSON.forEach( item => todosProdutos.push(item))

    exibirProdutos(todosProdutos)
    
  }
}

function exibirProdutos(listaProdutos) {
  const divCentral = document.getElementById('todosProdutos')
  divCentral.innerHTML = ""

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

configurarBusca() 