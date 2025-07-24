export async function consumirAPI(datosDelFormulario){
    //1 Para que back voy
let url = "http://localhost:8080/personajes";
    //2 configuracion de la peticion
let peticion = { 
    headers:{"Content-Type": "application/json"},
    method : "POST",
    body: datosDelFormulario,
}
    //3 Inicializar la peticion
let respuesta = await fetch(url, peticion);
    return await respuesta.json();
} 