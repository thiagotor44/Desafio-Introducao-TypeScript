const pessoa = {
    nome: 'Ana',
    idade: 49,
    profissao: 'Advogada'
}

pessoa.idade = 44;

const Thiago: {nome: string, idade: number, profissao:string} = {
    nome: 'Thiago',
    idade: 25,
    profissao:'Desenvolvedor'
}

const Paula: {nome: string, idade: number, profissao:string} = {
    nome: 'Paula',
    idade: 11,
    profissao:'Estudante'
}

enum Profissao{
    Professor,
    Estudante,
    Atriz,
    Desenvolvedor,
    Desenvolvedora,
    Advogada,
    JogadoraDeFutebol,
    Medica,
    Arquiteta

}
interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const sarah: Pessoa = {
    nome: 'Sarah',
    idade: 23,
    profissao: Profissao.Medica
}

const Carol: Pessoa = {
    nome: 'Carol',
    idade: 28,
    profissao: Profissao.Arquiteta
}

const Mio: Estudante = {
    nome: 'Mio',
    idade: 22,
    profissao:Profissao.Desenvolvedora,
    materias:["Matemática discreta", "Programação"]
}

const Mara: Estudante = {
    nome: 'Mara',
    idade: 20,
    materias:["Matemática discreta", "Ingles Tecnico"]
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item);
    }
}

listar(Mio.materias);