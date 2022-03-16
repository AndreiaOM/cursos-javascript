var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 != -1) {
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!');
    } else if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto!');
    } else { 
        console.log('Ninguém marcou ponto.');
    }
} else {console.log('Jogador inválido.')}

//verificação em uma linha
jogador1 > 0 ? console.log('Marcou ponto.') : console.log('Não marcou ponto.')

if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;
}else if (jogador2 > 0 && jogador1 == 0) {
        console.log('Jogador 2 marcou ponto!');
        placar = jogador2 > jogador1;
}else {
    console.log('Ninguém marcou ponto!');
}

// usando switch/case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!');
        break
    default:
        console.log('Jogo empatado!');s
}

// for - repetição de instrução até que a condição seja falsa
//for(expressaoInicial; condicao; incremento){declacao}
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {prop1: 'valor', prop2: 'valor2', prop3: 'valor3'}

for(let indice = 0; indice < array.length; indice++) {
   console.log(indice);
}

//for/in - repetição a partir de uma propriedade (imprime o indice)
//for([indice] in [objeto ou array]{declaracao})
for(let i in array) {
    console.log(i);
}

for(i in object) {
    console.log(i);
}

//for/of repeticao a partir de um valor (imprime o valor)
//for(indice of array){declarcao}
for(i of array) {
    console.log(i);
}

//nao da pra usar for/of em objetos
for(i of object.prop1) {
    console.log(i);
}

//while - executa uma funcao enquando a condição é verdadeira
//verificação deve ser feita antes da execução para nao criar um loop

var a = 0;
while (a < 10) {
    a ++;
    console.log(a)
}

//do/while - executa uma instrução ate que a condição seja falsa
//verificação é feita depois da execução

do {
    a++;
    console.log(a);
} while(a < 10);
