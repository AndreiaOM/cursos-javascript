//módulo (%)
//operador binário. retorna o inteiro restante da divisao dos dos operandos.

12 % 5 // retorna 2

//incremento (++) e decremento (--)
++x
x++

--x
x--

//negação (-) e adição (+)
-3
+"3" //retorna 3
+true //retorna 1
+false //retorna 0
-true //retorna -1

//operador de exponenciação (**)
2 ** 3 //retorna 8
10 ** -1 //retorna 0.1

//operador de agrupamento ()
2 * (3 + 2)

//atribuição
x = y

//atribuição de adição
x = x + y //ou
x += y

//atribuição de subtração
x = x - y //ou
x -= y

//atribuição de multiplicação
x = x * y //ou
x *= y

//atribuição de divisao
x = x / y //ou
x /= y

//atribuição de resto
x = x % y //ou
x %= y

//igual (==)
//retorna verdadeiro caso os operandos sejam iguais
"3" == 3

//não igual (!=)
//retorna verdadeiro caso os operandos nao sejam iguais
var2 != "3"

//estritamente igual (===)
//retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo
3 === var1

//estritamente nao igual (!==)
//retorna verdadeiro caso os operandos nao sejam iguais e/ou nao sejam do mesmo tipo
var1 !== "3"

//maior que ou igual (>=)
//retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita
var2 >= var1

//menor que ou igual (<=)
//retorna verdadeiro caso o operando da esquerda seja menor ou igual que o da direita
var2 <= var1

//ternario, se for verdadeiro recebe a primeira, se for falso, a segunda
condicao ? valor1 : valor2

true ? 'foo' : 'bar' //retorna 'foo'
false ? 'foo' : 'bar' //retorna 'bar'

//spread
var partes = ['ombro', 'joelhos'];
var musica = ['cabeça', ...partes, 'e', 'pés'];
var musica = ['cabeça', 'ombro', 'joelhos', 'e', 'pés'];


function fn(x, y, z) {}
var args = [0, 1, 2];
fn(...args);

//deletar algo
delete something;

//determinar tipo
typeof something;

//in
something in something

//arrays
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicomoro');
0 in arvores; //retorna true
3 in arvores; //retorna true
6 in arvores; //retorna false
'cedro' in arvores //retorna false (voce deve especificar o numero do indice, nao o valor naquele indice)
'length' in arvores; //retorna true (length é uma propriedade de Array)

//objetos predefinidos
'PI' in Math; //retorna true
var minhaString = new String('coral');
'length' in minhaString //retorna true

//objetos personalizados
var meucarro = {marca: 'Honda', modelo: 'Accord', ano: 1998}
'marca' in meucarro; //retorna true

//instaceof
objeto instanceof tipoObjeto
var dia = new Date(2018, 12, 17)
if (dia instanceof Date) {
    //code here
}

//estruturas de repetição
if (condition) {
    //code
} else if (condition) {
    //code
}

const array = [0, 1, 2, 3, 4, 5]

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é par.`);
    } if {
        //code
    } else {
        console.log(`O número ${item} é ímpar.`);
    }
});

//switch
const fruit = 'papaya'
switch (fruit) {
    case 'banana';
        console.log('R$ 3,00/kg');
        break;
    case 'mamão';
    case 'pera';
        console.log('R$ 2,00/kg');
        break;
    default;
        console.log('Produto não existe no estoque.');
        break;
}   

//for
//for ([expressaoInicial]; [condição]; [incremento]) declaração
const array = ['one', 'two', 'three'];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Element #${index}: ${element}.`);
}

//while
//while (condicao) declaracao
var n = 0;
var x = 0;
while (n < 3) {
    n++;
    x += n; //1, 3, 6
}

//do
//do {declaracao} while {condicao}

do {
    i += 1;
    console.log(i);
} while (i < 5);

//for...in-of
let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
    console.log(i); //logs "0", "1", "2", "foo"
}

for (let i of arr) {
    console.log(i); //logs "3", "5", "7"
} // so pega os id numerados

//break
var index = 0;
while(true) {
    index++;
    if (index > 2) {
        break;
    }
}

//continue
const array = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 === 0) {
        continue; //pula os pares
    }
}