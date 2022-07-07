"use strict";
const pessoa = {
    nome: 'Ana',
    idade: 49,
    profissao: 'Advogada'
};
pessoa.idade = 44;
const Thiago = {
    nome: 'Thiago',
    idade: 25,
    profissao: 'Desenvolvedor'
};
const Paula = {
    nome: 'Paula',
    idade: 11,
    profissao: 'Estudante'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Estudante"] = 1] = "Estudante";
    Profissao[Profissao["Atriz"] = 2] = "Atriz";
    Profissao[Profissao["Desenvolvedor"] = 3] = "Desenvolvedor";
    Profissao[Profissao["Desenvolvedora"] = 4] = "Desenvolvedora";
    Profissao[Profissao["Advogada"] = 5] = "Advogada";
    Profissao[Profissao["JogadoraDeFutebol"] = 6] = "JogadoraDeFutebol";
    Profissao[Profissao["Medica"] = 7] = "Medica";
    Profissao[Profissao["Arquiteta"] = 8] = "Arquiteta";
})(Profissao || (Profissao = {}));
const sarah = {
    nome: 'Sarah',
    idade: 23,
    profissao: Profissao.Medica
};
const Carol = {
    nome: 'Carol',
    idade: 28,
    profissao: Profissao.Arquiteta
};
const Mio = {
    nome: 'Mio',
    idade: 22,
    profissao: Profissao.Desenvolvedora,
    materias: ["Matemática discreta", "Programação"]
};
const Mara = {
    nome: 'Mara',
    idade: 20,
    materias: ["Matemática discreta", "Ingles Tecnico"]
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(Mio.materias);
