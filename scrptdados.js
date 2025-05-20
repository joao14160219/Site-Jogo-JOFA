document.addEventListener('DOMContentLoaded', () => {
    const gerarCartasBtn = document.getElementById('gerarcartas');
    const shotsAleatoriosBtn = document.getElementById('shotsAleatorios');
    const cartaImagem = document.getElementById('cartaImagem');
    const cartaImagem2 = document.getElementById('cartaImagem2');
    const numeroAleatorioDiv = document.getElementById('numeroAleatorio');
    const jogadorAtualDiv = document.getElementById('jogadorAtual');

    const cartas = [
        "dados/dado_1-removebg-preview.png",
        "dados/dado_2-removebg-preview.png",
        "dados/dado_3-removebg-preview.png",
        "dados/dado_4-removebg-preview.png",
        "dados/dado_5-removebg-preview.png",
        "dados/dado_6-removebg-preview.png",
    ];

    // Mapeamento das imagens para os valores dos dados
    const valoresCartas = {
        "dados/dado_1-removebg-preview.png": 1,
        "dados/dado_2-removebg-preview.png": 2,
        "dados/dado_3-removebg-preview.png": 3,
        "dados/dado_4-removebg-preview.png": 4,
        "dados/dado_5-removebg-preview.png": 5,
        "dados/dado_6-removebg-preview.png": 6,
    };

    // Recuperar jogadores e posições do localStorage
    const jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
    const posicoes = JSON.parse(localStorage.getItem('posicoes')) || Array(jogadores.length).fill(0);
    let jogadorIndex = 0;

    if (gerarCartasBtn && cartaImagem && cartaImagem2 && numeroAleatorioDiv && jogadorAtualDiv) {
        // Função para gerar dados
        const gerarDados = () => {
            let indiceAleatorio1 = Math.floor(Math.random() * cartas.length);
            let indiceAleatorio2;
            do {
                indiceAleatorio2 = Math.floor(Math.random() * cartas.length);
            } while (indiceAleatorio2 === indiceAleatorio1);

            cartaImagem.src = cartas[indiceAleatorio1];
            cartaImagem2.src = cartas[indiceAleatorio2];
            cartaImagem.style.display = "block";
            cartaImagem2.style.display = "block";
            numeroAleatorioDiv.textContent = "";

            // Atualizar a posição do jogador atual
            if (jogadores.length > 0) {
                const valorDado1 = valoresCartas[cartas[indiceAleatorio1]];
                const valorDado2 = valoresCartas[cartas[indiceAleatorio2]];
                const somaDados = valorDado1 + valorDado2;

                posicoes[jogadorIndex] += somaDados; // Atualiza a posição do jogador atual
                localStorage.setItem('posicoes', JSON.stringify(posicoes)); // Salva as posições no localStorage

                jogadorAtualDiv.textContent = `Jogador atual: ${jogadores[jogadorIndex]} (Casa: ${posicoes[jogadorIndex]})`;
                jogadorIndex = (jogadorIndex + 1) % jogadores.length; // Alterna para o próximo jogador
            }
        };

        gerarCartasBtn.addEventListener('click', gerarDados);

        // Chamar a função gerarDados() ao carregar a página
        gerarDados(); 
    } else {
        console.error('Elementos não encontrados!');
    }
});