//revisão sobre Arrays

//Criando na array com constructor
// const nomes = new Array('Eduardo', 'Maria', 'Joana')
// //sobrescreve o indice 2
// nomes[2] = 'Ana Rita'
// //Adiciona itens ao final do array
// nomes.push('Bruno')
// nomes.push('Guimaraes')

// let novo =  nomes.slice(3)

// console.log(novo);

// //Adicionando array nomes na variavel novoArray
// const novoArray = [...nomes]

const nome = 'Bruno Cesar de Souza Guimaraes';
let newsNome;
let nomeNovo;

for(let num in nome){
    //split transforma string em array, usando os parametros para 
    newsNome = nome.split(' ')
    //transformando strings em array
    nomeNovo = newsNome.join(' - ')
}

console.log(nomeNovo)




