"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumeros(numero1, numero2, devePrintar, Frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(Frase + resultado);
    }
    return numero1 + numero2;
}
let devePrintar = true;
let Frase;
Frase = "O valor é: ";
if (button) {
    button.addEventListener("click", () => {
        if (input1 && input2) {
            adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, Frase);
        }
    });
}
