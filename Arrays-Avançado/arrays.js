//Aula de desestrutração com arrays

/*
Destruturar é a forma feita abaixo, onde o valor do lado esquerdo do sinal de igual é o nome da variavel é o lado direito o valor. 

Como as variaveis já foram declaradas anteriormente, ele apenas está retribuindo o valor das variaveis. 

*/

let a = "A";
let b = "B";
let c = "C";
const letras = [b, c, a];
[a, b, c] = letras

console.log(a, b, c)

const numeros = [10, 20, 30, 40, 55, 66, 77, 88, 99];
const [primeiraNumero, segundoNumero, terceiroNumero, ... resto] = numeros; //Os três pontos vai pegar todo o resto do array que não for preenchido nas variaveis
console.log(primeiraNumero, segundoNumero)
console.log(resto)// 40, 55, 66, 77, 88, 99

const [uno, , tres, , cincum, , sevenUp, ,eita] = numeros //atribuindo com spread 

console.log(uno, tres, cincum )

const numeros2 = [[1,2,3], [4,5,6], [7,8,9]];
console.log(numeros2[1][2])//retorna 6 


const [lista, lista1, lista2] = numeros2
console.log(lista[1], lista1[2], lista2)
