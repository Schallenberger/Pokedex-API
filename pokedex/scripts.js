


pegaPokemons(1)

function pegaPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(Response => Response.json())
    
    .then(allPokemon => {
        
        var pokemons = []
        
        allPokemon.results.map((val)=>{
            
            fetch(val.url)
            .then(Response => Response.json())
            
            .then(pokemonSingle => {
                
                pokemons.push({nome:val.name, imagem:pokemonSingle.sprites.front_default})
                
                if(pokemons.length == quantidade){
                    
                    var pokemonsBoxes = document.querySelector(".pokemon-boxes")
                    pokemonsBoxes.innerHTML = ""
                    
                    pokemons.map(function(val){
                        pokemonsBoxes.innerHTML+=`
                        <div class="pokemon-box">
                        <img src="`+val.imagem+`">
                        <p>`+val.nome+`</p>
                        </div>                                                                                                                                                                                                                                                 
                        `
                    })
                }
            })
        })
    })
}

var quantidade = document.getElementById("quantidade")
quantidade.addEventListener('keyup',()=>{
    pegaPokemons(quantidade.value)
})