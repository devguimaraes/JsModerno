// const hora = 13; //estrutura de controle
// const tempo = "Chuva"

// if(hora <= 12 && tempo === "Chuva"){
//   console.log("bom dia, a manhã vai ser chuvosa")
// }else if ((hora > 12 && hora <= 17) && tempo === "Chuva"){
//   console.log("Boa tarde, vai chovar de tarde chapa")
// }else {
//   console.log("Boa Noite")
// }

//Aula 2 de -- if else

const numero = "Vidal";

if(numero >= 0 && numero < 10){
    console.log("numero está entre 0 e 9")
}else if(numero >= 10 && numero < 100){
    console.log("Esse número está entre 10 e 100")
}else if(numero >= 100 || numero < 0){
    console.log("Só aceitamos numero de 0 a 99, sem contar os negativos")
}else {
    console.log("O valor digitado não é um número")
}

