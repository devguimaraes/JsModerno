//Aula de como usar filter, map e reduce juntos
//filtrar pares
//Dobrar Valores
//Somar valores dobrados. 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const filtrando = numeros.filter((obj)=>{
    if(obj % 2 === 0){
        return obj
    }
}).map((obj)=>{
    return obj * 2
}).reduce((acumulador, valor)=>{
    acumulador += valor
    return acumulador
})


console.log(filtrando)
