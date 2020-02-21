//Aula de operador ternário
/*
Operador ternário serve para substiuir um IF quando ele for pequeno

Abaixo segue o formato do operador tenário

(condição  ? valor Verdadeiro : valor Falso)

*/
const pointUser = 9999;
const nivelUser = (pointUser >= 1000 ? "Usuário VIP" : "Usuário Normal");//Operador ternário 
const cor = (nivelUser === "Usuário VIP" ? "Black" : "White")

console.log(nivelUser, cor)