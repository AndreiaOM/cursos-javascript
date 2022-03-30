//string
//retorna o tamanho de uma string
'Texto'.length //5

//retorna um array quebrando a string por um delimitador
'Texto'.split('x') //['Te', 'to']

//busca por um valor e substitui por outro
'Texto'.replace('Text', 'txeT') // txeTo

//retorna a "fatia" de um valor
'Texto'.slice(-1) // o - ultima letra da string
'Texto'.slice(0, -1) // Text - primeira letra menos a ultima
'Texto'.slice(1) // exto - segunda letra ate a ultima

//retorna N caracters a partir de uma posição
'Texto'.substr(0, 2) // Te - (começo, quantidade de caract)

//numero
const myNumber = 12.345;
//numero para string
myNumber.toString()

//numero com um numero de casas decimais
myNumber.toFixed(2) //12.34

//string em float
parseFloat('13.22')

//string em int
parseInt('13.20') //13

//null
const nullVariable = null;
console.log(typeof nullVariable) // object
console.log(nullVariable) //null

//undefined
let undefinedVariable;
console.log(typeof undefinedVariable) //undefined

//object
let user = {
    name: 'Guilherme'
    lastName: 'Gabriel da Silva'
};

//alterando a propriedade de um objeto
user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';

const prop = 'name';
user[prop] = 'Outro nome 3';

//criando uma propriedade
user.lastName = 'Cabrini da Silva';

//deletando uma propriedade
delete user.name;

//recupera as chaves do objeto
Object.keys(user)

//recupera os valores das chaves do objeto
Object.values(user)

//retorna um array de arrays contendo [nome_pro, valor_prop]
Object.entries(user) //{['name', 'Guilherme'], ['lastName', 'Gabriel da Siva']}

//mergear propriedades de objetos
Object.assign(user, {fullName: 'Guilherme Cabrini da Silva'}) //nao recomendado
Object.assign({}, user, {age:26})

//previne todas as alterações em um objeto
Object.freeze(user)

//permite apenas a alteração de propriedades existentes em um objeto
Object.seal(user)

//symbol
const namesymbol1 = Symbol();
const namesymbol2 = Symbol();

const user = {
    [namesymbol1]: 'Guilherme',
    [namesymbol2]: 'Outro nome',
    lastName: 'Gabriel da Silva'
}

//symbols sao unicos
//previnir conflito entre nomes de propriedades, propriedades nao sao sobreescritas
//symbols criam propriedades que nao sao enumberables
//exibir symbols de um objeto
Object.getOwnPropertySymbols(user)

//acessando todas as propriedades do objeto
Reflect.ownKeys(user)

//criar um enum
const diretions = {
    UP : Symbol('UP'),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RIGHT : Symbol('RIGHT')
}

function fn() {
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    //mais de uma expressao
    return 'Code here';
}

//funçoes tambem sao objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//receber e retornar funçoes
const controlFnExec => fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //executara a função fn
handleFnExecution(); //nao executara a função fn

//controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam();
        }
    }
}

//2-function
(() => {
    this.name getNameArrowFn = () => this.name;
    const getNameArrowFn = () => this.name;

    function getName() {
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();

//array
const users = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }
];

//Retornar a quantidade de itens
persons.length

//verificar se é array
Array.isArray(persons);

//iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
})

//filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);

//retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person
})

//transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

//juntando operaçoes
const totalEvenAges = persons
                            .filter(person => person.age % 2 ===0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age;
                            }, 0);