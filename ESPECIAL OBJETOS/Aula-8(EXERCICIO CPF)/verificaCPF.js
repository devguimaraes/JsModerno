let cpf = '128.143.207-50'

let contador = 11;
const cpfLimpo = cpf.replace(/\D+/g, '')

const cpfArray = Array.from(cpfLimpo)

const numeroCpf = cpfArray.slice(0, -2)


let primeiroDigito = Number(cpfArray.slice(9, 10))
let segundoDigito = Number(cpfArray.slice(10, 11))

const multiplicaCpfArray = numeroCpf.map((obj) => {
    contador--;
    return contador * Number(obj)
})
const somaValorCpf = multiplicaCpfArray.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador
}, 0)

let verificaPrimeiroDigito = calcular(somaValorCpf)

if (verificaPrimeiroDigito > 9) {
    verificaPrimeiroDigito = 0
}

if(verificaPrimeiroDigito === primeiroDigito){
    contador = 12;
    let numCpf = cpfArray.slice(0,-1);

    const multiplicaDeNovo = numCpf.map((obj)=>{
        contador --;
        return contador * Number(obj)
    })

    const somaDeNovo = multiplicaDeNovo.reduce((acumulador, valor)=>{
        return acumulador += valor

    },0)

    let verificaSegundoDigito = calcular(somaDeNovo)
    
    if (verificaSegundoDigito > 9) {
        verificaSegundoDigito = 0
    }

    if(primeiroDigito == verificaPrimeiroDigito && segundoDigito == verificaSegundoDigito){
        console.log(`Seu CPF ${cpf} é valido`)
    }else{
        console.log(`Seu CPF ${cpf} NÃO é valido cê tá me entendendo?`)
    }
}else{
    console.log(`Seu CPF ${cpf} NÃO é valido cê tá me entendendo?`)
}



function calcular(valor) {
    let resultado = 11 - (valor % 11);
    return resultado
}
