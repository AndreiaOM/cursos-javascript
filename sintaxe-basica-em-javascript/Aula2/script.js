// tipos primitivos

//booleanos
var vOuF = false;
console.log(vOuF);
console.log(typeof(vOuF));

//numeros
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

//string
var nome = "Diana";
console.log(nome);
console.log(typeof(nome));

//função
var funcao = function() {};
console.log(funcao);
console.log(typeof(funcao));

//como declarar
var variavel;
variavel = 'Martine';
console.log(variavel);

let variavel2 = 'Diana';
variavel2 = 'Martine';
console.log(variavel2);

const constante = 'Diana';
console.log(constante); 

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuição
var atribuicao = 'Diana';

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 5 - 2;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisão inteira
var divisaoInteira = 5 / 2;
console.log(divisaoInteira);

//resto da divisao
var divisaoResto = 5 % 2;
console.log(divisaoResto);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

// && - "e", considera que todos os valores sejam true
var e = false && true;
console.log(e);

// || - "ou", considera que qualquer valor seja true
var ou = false || true;
console.log(ou);

// ! - "não", inverte o valor de true para false ou vice-versa
var nao =  !true;
console.log(nao);


