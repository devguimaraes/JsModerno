//Aula de número primitivos e por referência

/*

Primitivos - String, number, boolean, undefined, null 

*/

//Valores primitivos são imutáveis, ou seja seu valor não muda. Permancerá sempre o mesmo.

// let a = "a";
// let b = a; //Cria Uma copia da variavel a
// console.log(a, b);
// a = "Outra coisa";
// console.log(a, b)

//Valores por referência como objetos,strings e function tem seu valor mutável, pois apontam para o mesmo espaço de mémoria. 


// let AB = [1,2,3,4];
// let BC = AB;

// console.log(AB, BC);
// console.log("####################################");
// BC.push(5,6,7,8,9);

// console.log(BC, AB);
// console.log("####################################");

// AB.pop();
// console.log(AB, BC)
// console.log("####################################");

// BC.unshift("BRUNO GUIMARAES");
// console.log(BC, AB)

let pessoa = {
    nome:"Luiz",
    sobrenome: "Otávio"
};

const humano = {... pessoa}; //faz uma cópia é funciona independente da varivael pessoa


console.log(pessoa, humano);

pessoa.nome = "Bruno";
pessoa.sobrenome = "Guimaraes"; //Vai alterar apenas a varivael sobrenome de pessoa

humano.sobrenome = "SOU MALUCÃO";

console.log(pessoa, humano);