//Introdução ao ES6

//Currying - Recebe um parametreo na função e pode retornar outras funçoes com n parametros
function soma(a) {
    return function (b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

//Hoisting - declarações de variaveis e funçoes sao elevadas ao escopo em que estao
// com variavel so eleva a criação e nao a atribuição
function fn() {
    //var text;
    console.log(text);
    text = 'Exemplo';
    console.log(text);
}

//funçao elevada como um todo
function fn() {
    //function log(value) {
    //    console.log(value)}
    log('Hoisting de função')

    function log(value) {
        console.log(value);
    }
}

//imutabilidade
const user = {
    name: 'Guilherme',
    lastName: 'Gabriel da Silva'
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName); 

//outro exemplo
const students = [
    {   name: 'Grace',
        grade: 7},
    {   name: 'Jennifer',
        grade: 4},
    {   name: 'Paul',
        grade: 10}
]

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7)
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);  