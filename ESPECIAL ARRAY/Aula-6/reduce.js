//Aula sobre reduce
/*
Somar toodos os numeros (com reduce)
Retornar um Array com parametros filter
Retornar um arrya com o dobro dos valores

*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27]
//usando o reduce no lugar do filter
// const totalSoma = numeros.reduce((acumulador, valor)=>{ 
//    if(valor % 2 === 0){
//        acumulador.push(valor)
//    }
//    return acumulador
    
// }, [])
//

//usando reduce no lugar do map
// const dobraValor = numeros.reduce((acumulador, valor)=>{
//    valor = valor * 2
//     acumulador.push(valor)
//     return acumulador
// },[])

// console.log(dobraValor)

//usando reduce como deve ser usando
// const numerosTotal = numeros.reduce((acumulador, valor)=>{
//     if(valor % 2 === 0) acumulador += valor;
//     return acumulador
// })

// console.log(numerosTotal)


const clientes = [
    {nome: 'João', idade: 202},
    {nome: 'VinteFumar', idade: 90},
    {nome: 'VinteComer', idade: 20},
    {nome: 'Cryson', idade: 71},
    {nome: 'SeuMadruga', idade: 777},
    {nome: 'BrunoGuimara', idade: 30},
];

const maisVelho = clientes.reduce((acumulador, valor)=>{
    if(acumulador.idade > valor.idade){
        return acumulador
    }else{
        return valor
    }
})

console.log(`O ser humano mais velho do mundo é ${maisVelho.nome} com a idade de ${maisVelho.idade}`)