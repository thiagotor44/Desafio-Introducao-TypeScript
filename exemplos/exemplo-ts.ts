let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2')as HTMLInputElement;

function adicionarNumeros(numero1: number, numero2: number, devePrintar : boolean, Frase : string){
    let resultado = numero1 + numero2;
   if(devePrintar){
    console.log(Frase + resultado)
   }
    return numero1 + numero2;
}
let devePrintar = true;
let Frase: string;
Frase = "O valor é: "
if(button){
    button.addEventListener("click", ()=>{
        if(input1 && input2){
            adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, Frase)
        }
        
    })
}
