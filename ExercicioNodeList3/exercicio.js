/*
Escreva uma função que receba um numero é retorne o seguinte:

Número divisivel por 3 = Fizz
Numero divisivel por 5 = Buzz
Divisivel por 3 e 5 = FizzBuzz

Não é divisivel por 3 e 5 = retorna o proprio número
checar se é um número 

usar número de 0 a 100 pra testar
*/



function fizzBuzz(numero) {
    if(typeof numero == "number"){
        if(numero % 3 == 0 && numero % 5 == 0) return numero + " - FizzBuzz"
       if(numero % 3 == 0) return numero + " - Fizz"
       if(numero % 5 == 0) return numero + " - Buzz" 
       return numero 
    }else{
        console.log("Valor informado não é um número valido")
    }
}

let i = 0;

while(i <= 100){
   console.log( fizzBuzz(i))
    i++
}

