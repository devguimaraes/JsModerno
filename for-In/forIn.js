//Estrutura de repetição for in

const frutas = ["Pêra", "Uva", "Mação", "Salada-Mista"];

const dados = {
    nome: "Bruno",
    sobrenome: "Guimaraes",
    profissao: "Desenvolvedor Web",
    endereco: {
        rua: "Frederico Santoni",
        numero: "28",
        bairro: "Inhaúma"
    }
}

/*
Quando o item percorrido pelo For in for um vetor (frutas), ele percorrerá o indice do array.

Quanto o item percorrido for um objeto (Dados) ele vai percorrer as chaves do objeto 
*/
for(let chaves in dados){
    let {endereco: {rua} } = dados
    console.log(rua)
}



