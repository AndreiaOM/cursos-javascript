// let array = ['string',1,true,['array1']...]

// o que são vetores ou arrays

//como declarar um array
let array = ['string',1,true];
console.log(array);

//pode guardar varios tipos de dados
let array = ['string',1,true,['array2'],['array3'],['array4']];
console.log(array);
console.log(array[0]);

//forEach(), executa uma funçao para cada indice do array
array.forEach(function(item, index){console.log(item, index)});

//push(), add item no final do array
array.push('novo item');
console.log(array);

//pop(), remove item no final do array
array.pop();
console.log(array); 

//shift(), remove item no inicio do array
array.shift();
console.log(array);

//unshift(), add item no inicio do array
array.unshift('novo item inicio');
console.log(array);

//indexOf(), retorna o indice de um valor
console.log(array.indexOf(true));

//splice(), remove ou substitui um item pelo indice dado
array.splice(0, 3);
console.log(array); 

//slice(), retorna uma parte de um array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);

// como declarar um objeto
let object = { propriedade1: 'valor1', propriedade2: 'valor2' };
// deve ser declarado entre chaves "{}"
console.log(object); 

// assim como arrays as propriedades de objetos podem guardar quaisquer valores
let object = { string: 'Diana', number: 1, boolean: true, array: ['array'], objectInterno: { objetoInterno: 'objeto Interno' } };
console.log(object);
console.log(object.boolean);

var string = object.string
console.log(string);

//desestruturando usando chaves
let { string, number, boolean } = object;
console.log(string, number, boolean);