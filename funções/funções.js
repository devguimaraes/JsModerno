//Aula sobre funções


// function saudar(nome){
//     return `Bom dia, ${nome}!`;
// }

//Sinal de igual no parametro é para setar um valor padrão
// function somar(x = 1, y = 1){
//     let num = x;
//     for(x; x <= y; x++){
//         console.log(`O valor de ${y} vezes ${x} é igual a ${y * x}`); 
//     }
//     return `A soma dos valores de ${num} somado é de ${x}`;
// }

// console.log(somar());


/*
Quando chamar um função dentro de uma varivavel
da se o nome de funções anônimas. Segu exemplo abaixo;

let raiz = function(num){
    return Math.sqrt(num)
};

console.log(raiz(16));

*/


//Chamando função pelo modo Arrow Function
let potenciacao = (x, y) => {
    return Math.pow(x, y);
}


console.log(potenciacao(7, 3));