//Aula sobre funções imediatas ou IIFE
//São função auto invacadas, são precedidas de chaves antes e depois pra invocala 

(function(idade, nome, sobrenome){
   
    console.log(`Nome:${nome} Sobrenome:${sobrenome}  Idade: ${idade}`)

})(30, 'Bruno', 'Guimaraes')