// Função para sortear números aleatórios dentro de um intervalo especificado
function sortear() {
    // Obter os valores dos campos de entrada
    let quantidade = parseFloat(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Verificar se o limite inferior é maior ou igual ao limite superior
    if (de >= ate) {
        // Alertar o usuário sobre a condição inadequada
        alert('O número inicial deve ser menor que o número final. Por favor, verifique os valores informados.');
        return;
    }

    // Verificar se a quantidade de números a serem sorteados é maior que o intervalo especificado
    if (quantidade > (ate - de + 1)) {
        // Alertar o usuário sobre a quantidade inválida
        alert('A quantidade de números a serem sorteados deve ser menor ou igual ao intervalo informado. Por favor, ajuste os valores.');
        return;
    }

    // Inicializar um array para armazenar os números sorteados
    let sorteados = [];
    let numero;

    // Laço para sortear os números
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        // Verificar se o número já foi sorteado anteriormente
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        // Adicionar o número sorteado ao array
        sorteados.push(numero);
    }

    // Exibir os números sorteados na página
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    
    // Alterar o status do botão de reiniciar
    alterarStatusBotao();
}

// Função para obter um número aleatório dentro de um intervalo especificado
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para alterar o status do botão de reiniciar
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Função para reiniciar o formulário
function reiniciar() {
    // Limpar os campos de entrada e o resultado
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    
    // Alterar o status do botão de reiniciar
    alterarStatusBotao();
}
