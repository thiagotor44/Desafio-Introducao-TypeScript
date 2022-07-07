"use strict";
// function somarValores(input1:number | string ,input2: number| string){ 'uma outra forma de fazer a linha 5 '
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(6, 4));
console.log(somarValores('Ola', ", tudo bem?"));
console.log(somarValores("3", " 6"));
console.log(somarValores("Que dia é hoje amigo?", " 6"));
