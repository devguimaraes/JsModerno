//Aula sobre concatenação de array


const numeros = [1, 2, 3]
const numeros2 = [4, 5, 6]

const TdNumeros = numeros.concat(numeros2, [7,8,9], "Fim")

//Esse é o spread operator
const spreadOperador = [...numeros, ...numeros2, ...[7,8,9]]
console.log(spreadOperador) 
