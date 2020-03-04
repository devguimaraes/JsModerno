//tratando erros do Try e Catch

function faccao(favela) {
    if (typeof favela !== "string") {
        throw ("Precisa digitar um nome valido");
    }

    if (favela == "complexo do chapadao") return "Comando Vermelho desde pequeninho";
    if (favela !== "complexo do chapadao") return "três cu safado";
}


function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError("Esperando instancia de um Date")
    }

    if(!data){
       data = new Date()
    }

    return data.toLocaleTimeString("pt-BR", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false //formata para 24h
    });
}

let numero = 900

try{
    console.log(retornaHora())
}catch(error){
    
}finally{
    console.log("tenha um bom dia")
}



// try {
//     console.log(faccao("complexo do chapadao"))
//     console.log(faccao(99))
//     console.log(faccao("complexo do chapadao"))
    
// } catch (error) {
    
// }finally{
//     console.log("AQUI VAI SEMPRE RODAR")//a parte do finally sempre é executado, tendo erro ou não
// }