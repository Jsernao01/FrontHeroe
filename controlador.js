import { consumirAPI } from "./consumoServicio.js";

let nombres = document.getElementById("nombres");
let categoriaPersonaje = document.getElementById("categoria");
let cantidadDeVida = document.getElementById("cantidad");
let ataque = document.getElementById("ataque");
let defensa = document.getElementById("defensa");
let fotografia = document.getElementById("fotografia");
let fechaCreacion = document.getElementById("fechaCreacion");
let sigueVivo = document.getElementById("sigueVivo");

let botonFormulario = document.getElementById("boton");

function validarFormulario() {
    if (nombres.value.trim() === '') {
        Swal.fire({
            icon: "error",
            title: "Campo requerido",
            text: "Por favor, ingresa el nombre del personaje."
        });
        return false;
    }
    if (categoriaPersonaje.value.trim() === '') {
        Swal.fire({
            icon: "error",
            title: "Campo requerido",
            text: "Por favor, ingresa la categoría del personaje."
        });
        return false;
    }
    if (cantidadDeVida.value.trim() === '' || isNaN(cantidadDeVida.value) || parseInt(cantidadDeVida.value) <= 0) {
        Swal.fire({
            icon: "error",
            title: "Campo requerido / Inválido",
            text: "Por favor, ingresa una cantidad de vida válida (un número mayor a 0)."
        });
        return false;
    }
    if (ataque.value.trim() === '' || isNaN(ataque.value) || parseInt(ataque.value) < 0) {
        Swal.fire({
            icon: "error",
            title: "Campo requerido / Inválido",
            text: "Por favor, ingresa un valor de ataque válido (un número igual o mayor a 0)."
        });
        return false;
    }
    if (defensa.value.trim() === '' || isNaN(defensa.value) || parseInt(defensa.value) < 0) {
        Swal.fire({
            icon: "error",
            title: "Campo requerido / Inválido",
            text: "Por favor, ingresa un valor de defensa válido (un número igual o mayor a 0)."
        });
        return false;
    }
    if (fotografia.value.trim() === '') {
        Swal.fire({
            icon: "error",
            title: "Campo requerido",
            text: "Por favor, ingresa la URL de la fotografía."
        });
        return false;
    }
    if (fechaCreacion.value.trim() === '') {
        Swal.fire({
            icon: "error",
            title: "Campo requerido",
            text: "Por favor, ingresa la fecha de creación."
        });
        return false;
    }

    return true;
}

botonFormulario.addEventListener("click", function(evento){
    evento.preventDefault();

    if (!validarFormulario()) {
        return;
    }

    let datosQueVoyAEnviarAlBack = {
        "name": nombres.value.trim(),
        "categoriaPersonaje": categoriaPersonaje.value.trim(),
        "cantidadVida": parseInt(cantidadDeVida.value),
        "poderAtaque": parseInt(ataque.value),
        "poderDefensa": parseInt(defensa.value),
        "fotografia": fotografia.value.trim(),
        "fechaCreacion": fechaCreacion.value,
        "sigueVivo": sigueVivo.checked
    };

    let datosListosParEnviar = JSON.stringify(datosQueVoyAEnviarAlBack);

    console.log(datosListosParEnviar);

    consumirAPI(datosListosParEnviar)
        .then(function(respuesta){
            Swal.fire({
                title: "¡Registro Exitoso!",
                text: "El personaje ha sido registrado correctamente.",
                icon: "success"
            });
        })
        .catch(function(error){
            console.error("Error al registrar el personaje:", error);
            Swal.fire({
                icon: "error",
                title: "Error al registrar",
                text: "Hubo un problema al registrar el personaje. Por favor, inténtalo de nuevo más tarde.",
            });
        });
});