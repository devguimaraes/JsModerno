//Aula sobre Filter
/*

O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

Filter sempre retorna um array, com a mesma quantidade de elementos ou menos.

Filter não altera o objeto, apenas filtra o array com os parametos passados

*/

// function maiorQueDez(value){
//     return value >= 10
// }


// const numero = [1, 2, 3, 4, 5, 6, 12, 13, 14, 15, 16];
// const filterNumber = numero.filter((numero)=>{
//     return numero > 10;
// })
// console.log(filterNumber)

const clientes = [
    {nome: 'João', id: 22},
    {nome: 'VinteFumar', id: 420},
    {nome: 'VinteComer', id: 20},
    {nome: 'Cryson', id: 71},
    {nome: 'SeuMadruga', id: 77},
    {nome: 'BrunoGuimara', id: 30},
];

let idCliente = clientes.filter((obj)=>{
  //retorna todos os objetos que o nome terminar com R
  return obj.nome.toLowerCase().endsWith('r')

})

console.log(idCliente)


