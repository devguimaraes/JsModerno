/*
    Aula sobre variaveis
As variaveis com let sempre busca pela variavel dentro 
do seu escopo, caso não encontre ela procura no escopo
maior, ou de cima. O exemplo de if aninhado abaixo explica bem. 


VAR só respeita escopo de função pra todo resto seu escopo é global, ou seja acessado de qualquer lugar.

*/
const verdade = true;

let nome = "Bruno ";//Acessado apenas no seu escopo
var nome2 = "Guimaraes";//Acessado dentro da função

if (verdade){
    let nome = "BRUNOOOO";//escopo fechado
    // console.log(nome, nome2)
    if(verdade){
        let nome = "ALBUQUERQUE";//escopo fechado dentro do if
        console.log(nome)
    }
}

//Hosting 