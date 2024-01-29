let totalGeral;
limpar();


function adicionar () {

let produto = document.getElementById('produto').value;
// o atributo .split separa a string e pega apenas a parte que eu quero
//Um exemplo de código abaixo

//nomeProduto.textContent = 'Casaco - R$100'
//nomeProduto.split('-')[0] 

// Assim com o indice [0] pega oque vem antes do - / se colocasse [1] por exemplo, pegaria oque vem depois do -
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
let preco = quantidade*valorUnitario;
let carrinho = document.getElementById('lista-produtos');

carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;

  totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total'); 
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.get.ElementById('quantidade').value = 0;
}


function limpar() {
    totalGeral = 0;
     document.getElementById('lista-produtos').innerHTML = '';
     document.getElementById('valor-total').textContent = 'R$ 0';
 
 }