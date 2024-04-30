const pokemons = []
function carregarPokemons(){
    const pokemon1 = {
        id:1,
        nome:"bulbasaur",
        imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    }
    const pokemon2 = {
        id:2,
        nome:"squirtle",
        imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    }
    const pokemon3 = {
        id:3,
        nome:"charmander",
        imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    }
    const pokemon4 = {
        id:4,
        nome:"pikachu",
        imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    }
    const pokemon5 = {
        id:5,
        nome:"Mewtwo",
        imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
    }
    pokemons.push (pokemon1)
    pokemons.push (pokemon2)
    pokemons.push (pokemon3)
    pokemons.push (pokemon4)
    pokemons.push (pokemon5)
    for (let index=0;index<pokemons.length;index++){
        const pokemon=pokemons[index]
        adicionarCardPokemon(pokemon)
    }
}
function adicionarCardPokemon(pokemon){
    const imagemElemento=document.createElement("img")
    imagemElemento.setAttribute("src",pokemon.imagem)
    const divElemento=document.getElementById("conteudo-pokemon")
    divElemento.appendChild(imagemElemento)
}
