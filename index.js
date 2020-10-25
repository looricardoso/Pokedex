const botaoTrocarPokemon = document.getElementById('trocaPokemon');

const sorteioPokemon = () => {
    const sorteio = Math.round(Math.random() * 150) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${sorteio}`;
    return url;
};

const infoTela = (pokemon) => {
    const imagem = document.getElementById('imagem-pokemon');
    const nomePokemon = document.getElementById('nome-pokemon');
    imagem.src = pokemon.sprites.other['official-artwork'].front_default;
    nomePokemon.innerHTML = pokemon.name;
};

const proximoPokemon = () => {
    iniciar();
};

const iniciar = async () => {
    try {
        const link = sorteioPokemon();
        const response = await fetch(link);
        if (response.ok) {
            const result = await response.json();
            infoTela(result);
        } else {
            throw new Error(`${response.statusText}, código: ${response.status}`);
        }
    } catch (error) {
        console.log(`Erro ao obter: ${error.message}`);
    }

    botaoTrocarPokemon.addEventListener('click', proximoPokemon);
};

document.addEventListener('DOMContentLoaded', iniciar);