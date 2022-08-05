
/* consumiendo api con fetch */
function consumirApi(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(respuesta => {
            console.log(respuesta);
            return respuesta.json();
        }).then(respuesta2 => {
            console.log(respuesta2);
           const  {name} = respuesta2; //destruccion de objetos
            console.log(name);
            console.log(respuesta2.name);
        })
        .catch(error =>{
            console.log(error);
        })
}


/* consumiendo Api fetch con async await */
async function consumirApi(pokemon) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const respuesta2= await respuesta.json();
        console.log(respuesta);
        console.log(respuesta2);
        
    } catch (error) {
        console.log(error);
    }
}
consumirApi('pichu');



/* Nota realizan lo mismo */