function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatarNumero(numero, casasDecimais) {
    return numero.toFixed(casasDecimais);
}

function gerarNumeroAleatorioNormalETurbo() {
    const combinacoes = [
        [1, 2],
        [1, 3],
        [2, 3]
    ];

    const indiceAleatorio = Math.floor(Math.random() * combinacoes.length);
    return combinacoes[indiceAleatorio];
}

function obterImagemAleatoria() {
    const imagens = [
        '/source/assets/midia/image/signals/mines1.png',
        '/source/assets/midia/image/signals/mines2.png',
    ];

    const indiceAleatorio = Math.floor(Math.random() * imagens.length);
    return imagens[indiceAleatorio];
}

function gerarNovoSinal() {
    // Tocar o som ao clicar no botão
    const somClique = document.getElementById('som-clique');
    somClique.play();

    // Mostrar efeito de loading nos valores
    const loaderHTML = '<div class="loader"><li class="ball"></li><li class="ball"></li><li class="ball"></li></div>';
    document.getElementById('normal-valor').innerHTML = loaderHTML;
    document.getElementById('turbo-valor').innerHTML = loaderHTML;
    document.getElementById('minuto-valor').innerHTML = loaderHTML;
    document.getElementById('assertividade-valor').innerHTML = loaderHTML;

    // Mudar o texto do botão para "ANALISANDO..."
    const botao = document.getElementById('gerar-sinal');
    botao.textContent = 'ANALISANDO...';

    setTimeout(() => {
        const [valorNormal, valorTurbo] = gerarNumeroAleatorioNormalETurbo();

        // Substituir o valor normal por uma imagem
        document.getElementById('normal-valor').innerHTML = '<img src="test.jpg" id="imagem-aleatoria2" alt="Imagem Alternativa">';
        
        // Atualizar o valor turbo
        document.getElementById('turbo-valor').textContent = `${valorTurbo}`;

        const agora = new Date();
        const minutoPagante = new Date(agora.getTime() + 3 * 60000);
        const horas = String(minutoPagante.getHours()).padStart(2, '0');
        const minutos = String(minutoPagante.getMinutes()).padStart(2, '0');
        document.getElementById('minuto-valor').textContent = `${horas}:${minutos}`;

        const valorAssertividade = formatarNumero(gerarNumeroAleatorio(80, 90) + Math.random(), 2);
        document.getElementById('assertividade-valor').textContent = `${valorAssertividade}%`;

        // Obter uma imagem aleatória para o valor "normal"
        const imagemAleatoria = obterImagemAleatoria();
        document.getElementById('imagem-aleatoria2').src = imagemAleatoria;

        bloquearBotao();
    }, 800); // Delay de 4 segundos
}

function bloquearBotao() {
    const botao = document.getElementById('gerar-sinal');
    botao.disabled = true;
    botao.classList.remove('unblocked');
    botao.classList.add('blocked');
    let tempoRestante = 60;

    const intervalo = setInterval(() => {
        if (tempoRestante > 0) {
            tempoRestante--;
            botao.textContent = `AGUARDE (${tempoRestante}s)`;
        } else {
            clearInterval(intervalo);
            desbloquearBotao();
        }
    }, 1000);
}

function desbloquearBotao() {
    const botao = document.getElementById('gerar-sinal');
    botao.disabled = false;
    botao.classList.remove('blocked');
    botao.classList.add('unblocked');
    botao.textContent = 'GERAR NOVO SINAL';
}
