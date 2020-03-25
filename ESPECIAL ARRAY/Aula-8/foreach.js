//Aula sobre for each
/*
O método forEach() executa uma dada função em cada elemento de um array.
*/

const n1 = [10,20,30,40,50,60,70,80,90];
let total = 0;
n1.forEach((valor, indice)=>{
    total += valor;
})

console.log(total)