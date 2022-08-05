

function descargarClientes(){
    return new Promise(resolve =>{
        console.log('Descargando Clientes....');
        setTimeout(()=>{
            resolve('Los Clientes se descargron correctamente');
        },2000)
    })
}

function descargarPedidos(){
    return new Promise(resolve =>{
        console.log('Descargando los pedidos...');
        setTimeout(()=>{
            resolve('los pedidos se descargaron correctamente.')
        },3000)
    })
}

 
const app = async() =>{
    try {
        /* se ejecuta la primera funcion y pone en espera la segunda aunque no dependa una de la otra */
        const clientes = await descargarClientes();
        console.log(clientes);
        const pedidos = await descargarPedidos();
        console.log(pedidos);
        //const respuesta = await Promise.all([descargarClientes(),descargarPedidos()]); //ejecuta las dos promesas al mismo tiempo
    } catch (error) {
        console.log(error)
    }
}
app();