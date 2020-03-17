//Aula sobre Clousers JS

function retornaFuncao(){
    const nome = 'Bruno'
    return function(){
        return nome;
    }
}


const funcao = retornaFuncao();
console.dir(funcao())
