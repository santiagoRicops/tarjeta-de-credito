import {validator} from "./validator.js"

console.log(validator);
const inputNumeroDeTarjeta = document.querySelector(".inputNumeroTarjeta")
const botonValidador = document.querySelector(".validarTarjeta")



function manejadorDelValorDeInput(event) {

   const input = event.target
   
}

inputNumeroDeTarjeta.addEventListener("keyup", manejadorDelValorDeInput)

function manejorDelClickDeBoton() {
   validator.isValid(inputNumeroDeTarjeta.value)
   
}
botonValidador.addEventListener("click", manejorDelClickDeBoton)

/**
 * 1. Importanciones
 * 2. Dexlaracion de variables
 * 3. declaracion de funciones
 * 4. Ejecucion
 */