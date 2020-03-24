//Aula sobre map JS

/*

O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

*/

const numeros = [0, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 15, 22, 27]

const dobraValor = numeros.map((obj)=>{
    return obj * 2
})


const clientes = [
    {nome: 'João', id: 22},
    {nome: 'VinteFumar', id: 420},
    {nome: 'VinteComer', id: 20},
    {nome: 'Cryson', id: 71},
    {nome: 'SeuMadruga', id: 77},
    {nome: 'BrunoGuimara', id: 30},
];

const nomeDoCliente = clientes.map((obj)=>{
    return `Cliente de nome ${obj.nome}`
})

console.log(nomeDoCliente)
// const nomeCliente = clientes.map((obj)=>{
//     return obj.nome;
// })

// const idCliente = clientes.map((obj)=>{
//     return {nome: obj.nome}
// })




