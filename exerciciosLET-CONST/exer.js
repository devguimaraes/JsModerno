/*
Bruno Guimarães tem 30 anos, pesa 72kg
tem 1.8 de altura e seu IMC é de 25.925925925925

Luiz Otávio nasceu em 1980

calculo imc peso / (altura * altura)
*/

const nome = "Bruno";
const sobrenome = "Guimarães";
const idade = 30;
const peso = 72;
const altura = 1.79;

//calculando IMC
let imc = peso / (altura * altura);


//pegando a data
let data = new Date();
let ano = data.getFullYear();

//calculando o ano de nascimento
let anoNascimento = parseInt(ano - idade);

//mostrando resultado no console
console.log(`${nome} tem ${idade}, pesa ${peso}kg. Tem ${altura} de altura e seu imc é de ${imc}. ${nome} nasceu em ${anoNascimento}`)