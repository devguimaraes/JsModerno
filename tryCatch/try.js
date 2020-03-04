//Aula sobre try Catch, throw 

/*
    Try - tenta executar algo que esta dentro das chaves, caso algo dê errado, cai direto no bloco catch. Onde é tratado o erro.
*/
function soma(x, y){
    if (typeof x !== "number" || typeof y !== "number"){
        throw new Error("X e Y precisam ser números");//cria um erro identico ao javascript
    }
    return x + y;
}

try {
    console.log(soma(2, 2))//tenta fazer isso
    console.log(soma("a", 2))//se der errado, vai pra catch
} catch (error) {
    console.log(error)//cai aqui
}
