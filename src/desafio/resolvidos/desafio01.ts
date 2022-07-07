// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// Respostas= 1
let employee = {
    code: 10,
    name: 'John'
};

// Resposta 2
let funcionario3 : {codigo: number, nome: string}={
codigo : 30,
nome : "Thiago"
}

// Respostas 3 e 4
interface Funcionario1 {  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string
};

const funcionarioObj1 = {} as Funcionario1;
funcionarioObj1.codigo = 10;
funcionarioObj1.nome = 'João';

const funcionarioObj02: Funcionario1 = {
    codigo: 10,
    nome: 'João'
}