// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Padeiro"] = 0] = "Padeiro";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
})(Profissao || (Profissao = {}));
var pessoa01 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};
var pessoa02 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
var pessoa03 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};
var pessoa04 = {
    nome: "Calos",
    idade: 19,
    profissao: Profissao.Padeiro
};
