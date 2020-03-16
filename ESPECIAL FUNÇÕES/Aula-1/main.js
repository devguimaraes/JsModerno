//Aula de como declarar funções

//declaração de funcção literal
/*Chamando função dessa maneira, ocorre o hosting 

Hosting é quando a engine do javascript eleva a função pro ponto mal alto do arquivo, sendo chamada em qualquer lugar que não terá erro.

*/
function falarOi(){
    console.log("Oi")
}

/*
First-class objects (Objetos de primeira classe)

Function expression é quando uma função pode ser declarada como valor de uma variável.
*/

const retornaZero = function(){
    console.log(0)
}


/*
Arrow function abaixo

*/

const funcaoArrow = ()=>{
    console.log('sou uma arrow function')
}

funcaoArrow()

/*
Dentro de um obejto possto ter uma função
*/

const objeto = {
    falar: ()=>{console.log("Estou falando")}
}

objeto.falar()
