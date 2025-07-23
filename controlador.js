//referencias al formulario

let nombres = document.getElementById("nombres");
let cantidadDeVida = document.getElementById("cantidad");
let ataque = document.getElementById("ataque");
let defensa = document.getElementById("defensa");
let fotografia = document.getElementById("fotografia");
let fechaCreacion = document.getElementById("fechaCreacion");

let botonFormulario = document.getElementById("boton"); 

//Detecto el evento submit del formulario
botonFormulario.addEventListener("click", function(evento){
    evento.preventDefault();
    /* Swal.fire({
        title: "Buen trabajo malparidito!",
        text: "Hiciste click en el botón gonorreita!",
        icon: "success"
});*/
    /* Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
});*/

let datosQueVoyAEnviarAlBack ={
    "name" : nombres.value,
    "cantidadVida" : cantidadDeVida.value,
    "poderDefensa" : defensa.value,
    "fotografia" : fotografia.value,
    "fechaCreacion" : fechaCreacion.value
}
let datosListosParEnviar = JSON.stringify(datosQueVoyAEnviarAlBack);



})