// let num = 0;


// while(num <= 10){
//     console.log(num)
//     num++;
// }

function gerarNumeroo(min, max){
    const r = Math.random() * (max - min) + min;
    
    return Math.floor(r);//retorna o maior inteiro
}



const min = 1;
const max = 50;
let random = gerarNumeroo(min, max)

// while(random !== 10){
//     random = gerarNumeroo(min, max)
//     console.log(random)
// }


do {
    random = gerarNumeroo(min, max)
    console.log(random)
}while(random !== 10);//DO WHILE PRECISA DE PONTO E VIRGULA NO FINAL!!!