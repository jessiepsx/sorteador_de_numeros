function sortear () {
    //recuperar um elemento do html e o value recupera o valor dentro do input
    //parseint deixa ser realmente número e não pegar uma string
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let de = parseInt(document.getElementById('de').value)
    let ate = parseInt(document.getElementById('ate').value) 

//se o campo 'do numero' for maior que o valor do 'ate o numero'
if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
}

//se o usuario colocar uma quantidade de números pra sortear maior que as do intervalo 'de' ate 'ate'
if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
}

    let sorteados = []
    let numero

//loop para devolver os números aleatorios
    for (let i = 0; i < quantidade; i++){
        numero = numeroAleatorio(de,ate)

//evita a repetição dos números
        while(sorteados.includes(numero)) {
            numero = numeroAleatorio(de,ate)
        }
        sorteados.push(numero)
    }

//mostra o resultado no final do sorteio
//value recuperar o valor que recebemos em um campo de texto
//inner.html quando queremos manipular o conteudo do html
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao()
}

//gera um numero aleatorio entre o min e o max
//math floor so pega num inteiro
function numeroAleatorio(min,max) {
 return Math.floor(Math.random() * (max-min+1)) + min
}

//muda as cores do botao para voltar o azul e reiniciar no cinza
function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar')
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado')
    botao.classList.add('container__botao')
}

  else {
    botao.classList.remove('container__botao')
    botao.classList.add('container__botao-desabilitado')
  }
}

//reinicia todo o sorteador
//value = '' deixa o campo limpo
function reiniciar() {
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value= ''
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao()
}