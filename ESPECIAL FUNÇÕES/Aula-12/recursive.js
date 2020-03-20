//Aula sobre funções recursivas
function recursiva(max){
    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max)
}

recursiva(-10)

/*
Recursividade é uma função que se auto de chama até sastifazer alguma situação

No caso do exemplo acima, ela vai parar quando o número for maior que 10

*/
