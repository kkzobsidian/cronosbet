const dados = [
    { nome: 'José', valor: 'R$152,00' },
    { nome: 'Maria', valor: 'R$372,00' },
    { nome: 'Antônio', valor: 'R$102,00' },
    { nome: 'Francisca', valor: 'R$501,20' },
    { nome: 'João', valor: 'R$220,00' },
    { nome: 'Sebastião', valor: 'R$157,40' },
    { nome: 'Tereza', valor: 'R$860,00' },
    { nome: 'Manoel', valor: 'R$200,00' },
    { nome: 'Rosa', valor: 'R$145,00' },
    { nome: 'Carlos', valor: 'R$80,70' },
    { nome: 'Carmem', valor: 'R$40,00' },
    { nome: 'Luís', valor: 'R$55,00' },
    { nome: 'Elisabete', valor: 'R$432,50' },
    { nome: 'Joaquim', valor: 'R$125,00' },
    { nome: 'Helena', valor: 'R$110,00' },
    { nome: 'Vicente', valor: 'R$85,00' },
    { nome: 'Margarida', valor: 'R$195,00' },
    { nome: 'Aparecido', valor: 'R$1.130,00' },
    { nome: 'Lourdes', valor: 'R$940,00' },
    { nome: 'Arnaldo', valor: 'R$770,00' },
    { nome: 'Valéria', valor: 'R$315,00' },
    { nome: 'Fernando', valor: 'R$480,00' },
    { nome: 'Renata', valor: 'R$265,00' },
    { nome: 'Jorge', valor: 'R$330,00' },
    { nome: 'Tatiane', valor: 'R$210,00' },
    { nome: 'Rafael', valor: 'R$370,00' },
    { nome: 'Lúcia', valor: 'R$150,00' },
    { nome: 'Ricardo', valor: 'R$185,00' },
    { nome: 'Sônia', valor: 'R$420,00' },
    { nome: 'Daniel', valor: 'R$500,00' },
    { nome: 'Patrícia', valor: 'R$620,00' },
    { nome: 'Bruno', valor: 'R$275,00' },
    { nome: 'Sandra', valor: 'R$145,00' },
    { nome: 'Leonardo', valor: 'R$335,00' },
    { nome: 'Gisele', valor: 'R$240,00' },
    { nome: 'Marcos', valor: 'R$190,00' },
    { nome: 'Claudia', valor: 'R$315,00' },
    { nome: 'Vera', valor: 'R$280,00' },
    { nome: 'Eduardo', valor: 'R$455,00' },
    { nome: 'Juliana', valor: 'R$205,00' },
    { nome: 'Lucas', valor: 'R$395,00' },
    { nome: 'Simone', valor: 'R$325,00' },
    { nome: 'Arthur', valor: 'R$360,00' },
    { nome: 'Carla', valor: 'R$220,00' },
    { nome: 'André', valor: 'R$275,00' },
    { nome: 'Ana', valor: 'R$290,00' },
    { nome: 'Mariana', valor: 'R$410,00' },
    { nome: 'Felipe', valor: 'R$305,00' },
    { nome: 'Helena', valor: 'R$115,00' },
    { nome: 'Marcelo', valor: 'R$580,00' },
    { nome: 'Paula', valor: 'R$215,00' },
    { nome: 'Rogério', valor: 'R$370,00' },
    { nome: 'Sérgio', valor: 'R$430,00' },
    { nome: 'Débora', valor: 'R$300,00' },
    { nome: 'Anderson', valor: 'R$275,00' },
    { nome: 'Mariana', valor: 'R$190,00' },
    { nome: 'Alfredo', valor: 'R$250,00' },
    { nome: 'Roberta', valor: 'R$175,00' },
    { nome: 'Flávia', valor: 'R$320,00' },
    { nome: 'Eduarda', valor: 'R$290,00' },
    { nome: 'Gustavo', valor: 'R$230,00' },
    { nome: 'Cláudia', valor: 'R$210,00' },
    { nome: 'Marcela', valor: 'R$335,00' },
    { nome: 'Joana', valor: 'R$280,00' },
    { nome: 'Diego', valor: 'R$400,00' },
    { nome: 'Aline', valor: 'R$310,00' },
    { nome: 'Ricardo', valor: 'R$380,00' },
    { nome: 'Gabriela', valor: 'R$275,00' },
    { nome: 'Mário', valor: 'R$245,00' },
    { nome: 'Tatiane', valor: 'R$290,00' },
    { nome: 'Beatriz', valor: 'R$420,00' },
    { nome: 'Rodrigo', valor: 'R$320,00' },
    { nome: 'Alice', valor: 'R$350,00' },
    { nome: 'Rafael', valor: 'R$285,00' },
    { nome: 'Núbia', valor: 'R$260,00' },
    { nome: 'Jéssica', valor: 'R$295,00' },
    { nome: 'Vinícius', valor: 'R$275,00' },
    { nome: 'Priscila', valor: 'R$310,00' },
    { nome: 'Tiago', valor: 'R$220,00' },
    { nome: 'Mariane', valor: 'R$315,00' },
    { nome: 'João', valor: 'R$340,00' },
    { nome: 'Mariana', valor: 'R$230,00' }
];

function showPopup() {
    const popup = document.getElementById('popup-winner');
    const feedback = popup.querySelector('.winner');

    const dadoAleatorio = dados[Math.floor(Math.random() * dados.length)];

    feedback.textContent = `${dadoAleatorio.nome} sacou ${dadoAleatorio.valor}`;

    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

setInterval(showPopup, 10000);