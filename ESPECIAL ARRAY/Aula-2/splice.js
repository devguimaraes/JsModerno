//Aula sobre splice
let nomes = ['Ana', 'Rita', 'Joana', 'Iracema', 'Caroline'];

//nomes.splice(indice, delete, elem1, elem2, elemn3)

//fazendo o pop
// const pop = nomes.splice(-1, 1)
// //fazendo o shift 
// const shift = nomes.splice(0,1)
//fazendo o push
// const push = nomes.splice(nomes.length, 0, 'Bruno')
//fazendo unshfift 
const unshfift = nomes.splice(2, 0, 'Elemento zero')
console.log(nomes)