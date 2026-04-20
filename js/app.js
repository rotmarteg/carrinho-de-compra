let totalGeral;
limpar();

function adicionar() {
 //recuperar valores nomme do produto, quantidade e valor
 let Produto = document.getElementById('produto').value;
 let nomeProduto = Produto.split('-')[0];
 let valorUnitario = Produto.split('R$')[1];
 let quantidade = document.getElementById('quantidade').value;
 //calcular o preço, o nosso subtotal
 let preco = quantidade * valorUnitario;
 let carrinho = document.getElementById('lista-produtos');
 //adicionar no carrinho
 carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">R${quantidade}1x</span> ${nomeProduto} Celular <span class="texto-azul">R${preco}</span>
        </section>`;
 //atualizar o valor total
 totalGeral = totalGeral + preco;
 let campoTotal = document.getElementById('valor-total');
 campoTotal.textContent = `R${totalGeral}`;
 document.getElementById('quantidade').value = 0;
}

function limpar() {
  totalGeral = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';
};