//Aula sobre escopo de funções

/*
Escopo léxico é quando a função lembra onde ela foi declarada é todas as variaveis ao seu redor. 

A função tem seu escopo. Objetos tem seu escopo é assim por diante.

*/
const nome = 'bruno'

function falaNome(){
    console.log(nome)
}

falaNome()