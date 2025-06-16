const todosProdutos = [];

async function showSection(id) {
  console.log('Página clicada: ', id)
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  if (id == 'produtos') {
    const consultarBackEnd = await fetch('http://localhost:3000/api/produto')
    const converteJSON = await consultarBackEnd.json()
    console.log(converteJSON)
    converteJSON.forEach(item => todosProdutos.push(item))

    exibirProdutos(todosProdutos, document.getElementById('todosProdutos'))

  }
}
// Função para exibir os produtos
function exibirProdutos(listaProdutos, elementoLista) {
  elementoLista.innerHTML = '';

  listaProdutos.forEach((produto) => {
    let criarCard = document.createElement('div');
    criarCard.classList.add('product-card');

    let criarH3 = document.createElement('h3');
    criarH3.textContent = produto.nome;

    let criarP = document.createElement('p');
    criarP.textContent = `R$ ${produto.valor}`;

    criarH3.appendChild(criarP);
    criarCard.appendChild(criarH3);
    elementoLista.appendChild(criarCard);
  });
}

// Função para mostrar sugestões no autocomplete
function mostrarSugestoes(filtrados, valorBuscado, sugestoesBox) {
  sugestoesBox.innerHTML = '';
  if (valorBuscado.length === 0) {
    sugestoesBox.style.display = 'none';
    return;
  }

  const sugeridos = filtrados.slice(0, 5); // Limita a 5 sugestões
  sugeridos.forEach((produto) => {
    const sugestao = document.createElement('div');
    sugestao.classList.add('suggestion-item');
    sugestao.textContent = produto.nome;


    // Ao clicar na sugestão, preenche o campo de busca com o nome do produto
    sugestao.addEventListener('click', () => {
      document.getElementById('buscaProdutos').value = produto.nome;
      exibirProdutos([produto], document.getElementById('todosProdutos')); // Exibe o produto selecionado
      sugestoesBox.style.display = 'none'; // Fecha o box de sugestões
    });

    sugestao.onclick = () => {
      window.location.href = `produto_${produto.id}.html`;
    };

    sugestoesBox.appendChild(sugestao);
  });

  sugestoesBox.style.display = sugeridos.length ? 'block' : 'none';
}

// Função para configurar a busca em qualquer página
function configurarBusca(campoBuscaId, sugestoesBoxId, listaProdutos) {
  const campoBusca = document.getElementById(campoBuscaId);
  const sugestoesBox = document.getElementById(sugestoesBoxId);

  campoBusca.addEventListener('input', () => {
    const valorBuscado = campoBusca.value.toLowerCase();

    // Filtra os produtos com base no valor da busca
    const filtrados = listaProdutos.filter(produto =>
      produto.nome.toLowerCase().includes(valorBuscado)
    );

    // Exibe os produtos filtrados
    exibirProdutos(filtrados, document.getElementById('todosProdutos'));

    // Mostra as sugestões
    mostrarSugestoes(filtrados, valorBuscado, sugestoesBox);
  });

  // Quando o usuário clicar fora da busca, as sugestões desaparecem
  document.addEventListener('click', (event) => {
    if (!campoBusca.contains(event.target)) {
      sugestoesBox.style.display = 'none';
    }
  });
}

// Função que consulta o backend e preenche os produtos
async function carregarProdutos() {
  const consultarBackEnd = await fetch('http://localhost:3000/v1/produtos');
  const converteJSON = await consultarBackEnd.json();
  converteJSON.forEach(item => todosProdutos.push(item));

  // Exibe os produtos ao carregar a página
  exibirProdutos(todosProdutos, document.getElementById('todosProdutos'));
}

// Função para configurar a busca na página de início
function configurarBuscaInicio() {
  configurarBusca('buscaProdutosInicio', 'suggestionsInicio', todosProdutos);
}

// Função para configurar a busca na página de produtos
function configurarBuscaProdutos() {
  configurarBusca('buscaProdutos', 'suggestionsProdutos', todosProdutos);
}

// Carregar produtos e configurar as buscas
carregarProdutos();
configurarBuscaInicio();  // Busca na página inicial
configurarBuscaProdutos(); // Busca na página de produtos
