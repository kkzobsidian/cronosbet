function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatarNumero(numero, casasDecimais) {
    return numero.toFixed(casasDecimais);
}

function gerarNovoSinal() {
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
        const valorNormal = gerarNumeroAleatorio(2, 7);
        document.getElementById('normal-valor').textContent = `${valorNormal}x`;

        const valorTurbo = gerarNumeroAleatorio(1, 7);
        document.getElementById('turbo-valor').textContent = `${valorTurbo}x`;

        const agora = new Date();
        const minutoPagante = new Date(agora.getTime() + 3 * 60000);
        const horas = String(minutoPagante.getHours()).padStart(2, '0');
        const minutos = String(minutoPagante.getMinutes()).padStart(2, '0');
        document.getElementById('minuto-valor').textContent = `${horas}:${minutos}`;

        // Gerar valor para ASSERTIVIDADE
        const valorAssertividade = formatarNumero(gerarNumeroAleatorio(98, 99) + Math.random(), 2);
        document.getElementById('assertividade-valor').textContent = `${valorAssertividade}%`;

        bloquearBotao();
    }, 4000); // Delay de 2 segundos
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