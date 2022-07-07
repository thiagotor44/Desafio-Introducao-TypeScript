let valorAny : any;
valorAny = 4;
valorAny = 'Hello';
valorAny = true;


let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'testar';
valorString2 = valorAny;

function somarString(string1: string, string2: string){
    console.log(string1 + string2);
}

somarString('hello, ', 'top?');