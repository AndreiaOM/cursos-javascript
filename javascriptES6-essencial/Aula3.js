//Herança (baseada em prototipos, prototype, _proto_, constructor)

__proto__ -> prototype -> constructor

const myText = 'Hello prototype!';
myText.constructor -> String
myText.__proto__ -> String.prototype

new Foo(...);
/**
O que ocorre?
1 - Um novo objeto é criado, herdando Foo.prototype;
2 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado;
3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return', se não, será retornado o objeto criado no passo 1.
**/

function Animal() {}

Animal.prototype.qtdePatas = 0
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
  this.qtdePatas = 4;
  this.morde = morde;
}

Cachorro.prototype = Object.create(Animal); //pegando as propriedades de Animal
Cachorro.prototype.latir = function() {
  console.log('Au! au!');
}

const pug = new Cachorro(false);

//Classes (class)

class Animal {
  constructor(qtdePatas) {
    this.qtdePatas = 4;
  }
}

class Cachorro extends Animal {
  constructor(morde) {
    super(4);
    this.morde = 4;
  }
}  

const pug = new Cachorro(false);
console.log(pug); //Cachorro {qtdePatas: 4, morde: 4}

//modificadores de acesso

function Person(initialName) {
  let name = initialName;
  this.getName = function() {
    return name;
  }
  this.setName = function(newName) {
    name = newName;
  }
}

const p = new Person('Guilherme');
console.log(p); //Person {getName: f, setName: f}
p.getName(); //'Guilherme'
p.name; //undefined
p.setName('Thiago');
p.getName(); //'Thiago'

//Versao 12 (node)
class Person {
  #name = '';
  constructor(initialName) {
    this.#name = initialName;
  }
  setName(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
}

const p = new Person('Guilherme');
console.log(p); //Person {}
p.getName(); //'Guilherme'
p.name; //undefined
p.setName('Thiago');
p.getName(); //'Thiago'

//encapsulamento



