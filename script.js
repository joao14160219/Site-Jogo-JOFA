document.addEventListener('DOMContentLoaded', () => {
    const gerarCartasBtn = document.getElementById('gerarcartas');
    const cartaImagem = document.getElementById('cartaImagem');

    const cartas = [
        "cartas jogo/1.jpeg",
        "cartas jogo/2.jpeg",
        "cartas jogo/3.jpeg",
        "cartas jogo/4.jpeg",
        "cartas jogo/5.jpeg",
        "cartas jogo/6.jpeg",
        "cartas jogo/7.jpeg",
        "cartas jogo/8.jpeg",
        "cartas jogo/9.jpeg",
        "cartas jogo/10.jpeg",
        "cartas jogo/11.jpeg",
        "cartas jogo/12.jpeg",
        "cartas jogo/13.jpeg",
        "cartas jogo/14.jpeg",
        "cartas jogo/15.jpeg",
        "cartas jogo/16.jpeg",
        "cartas jogo/17.jpeg",
        "cartas jogo/18.jpeg",
        "cartas jogo/19.jpeg",
        "cartas jogo/20.jpeg",
        "cartas jogo/21.jpeg",
        "cartas jogo/22.jpeg",
        "cartas jogo/23.jpeg",
        "cartas jogo/24.jpeg",
        "cartas jogo/25.jpeg",
        "cartas jogo/26.jpeg",
        "cartas jogo/27.jpeg",
        "cartas jogo/28.jpeg",
        "cartas jogo/29.jpeg"
    ];

    if (gerarCartasBtn && cartaImagem) {
        // Função para exibir uma carta aleatória (mantida igual)
        const exibirCartaAleatoria = () => {
            const indiceAleatorio = Math.floor(Math.random() * cartas.length);
            const cartaSelecionada = cartas[indiceAleatorio];
            cartaImagem.src = cartaSelecionada;
        };

        gerarCartasBtn.addEventListener('click', exibirCartaAleatoria);

        // Exibir uma carta aleatória ao carregar a página
        exibirCartaAleatoria();
    } else {
        console.error('Elementos gerarCartas ou cartaImagem não encontrados!');
    }
});