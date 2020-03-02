//Aula sobre for OF

const nome =[ "Luiz", "Roberto", "Henrique"];

/*
For OF vai retornar o valor de cada indice que percorrer


*/
for(let dados of nome){
    dados = dados.toUpperCase();
    console.log(dados)
}

console.log("###########")

nome.forEach(function(elemento, indice){
    console.log(indice, elemento)
})