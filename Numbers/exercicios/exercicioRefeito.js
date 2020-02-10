
let numPrompt = Number(prompt("Digite um número para ser cálculado"));

//Pega o span é joga o número digitado no prompt
let spanNum = document.getElementById("numDigitado"); 

//Pega a Div onde serão feitos os cálculos
let divResposta = document.getElementById("resultadoCalculos");

//Verifica se o valor digitado é um número negativo
if(numPrompt < 0 ){
    divResposta.innerHTML = " ";
    divResposta.innerHTML += `<p>Numeros negativos não possuem raiz quadrada</p><br>`;
    divResposta.innerHTML += `<p>O número é inteiro? <strong>${(Number.isInteger(numPrompt) ? "Verdadeiro" : "Falso")}</strong></p><br>`;
    divResposta.innerHTML += `<p>É um NaN? <strong>${(Number.isNaN(numPrompt) ?  "Verdadeiro" : "Falso" )}</strong></p><br>`;
    divResposta.innerHTML += `<p>Arredondado pra baixo <strong>${Math.floor(numPrompt)}</strong></p><br>`;
    divResposta.innerHTML += `<p>Arredondado pra cima <strong>${Math.ceil(numPrompt)}</strong></p><br>`;
    divResposta.innerHTML += `<p>Com dois digítos <strong>${numPrompt.toFixed(2)}</strong></p><br>`;
} //Verifica se o valor digitado NÃO é um número
else if(!Number(numPrompt)){
    divResposta.innerHTML = " ";
    divResposta.innerHTML += `<p>O valor digitado não é um número</p><br>`;
    divResposta.innerHTML += `<p>É um NaN? ${(Number.isNaN(numPrompt) ?  "Verdadeiro" : "Falso" )}</p><br>`;

} //Se o valor for um número verdaeiro, faz isso.. 
else{
    spanNum.innerHTML = numPrompt;
    divResposta.innerHTML = " ";
    divResposta.innerHTML += `<p>A raiz quadrada de ${numPrompt} é <strong>${Math.round(Math.sqrt(numPrompt))}</strong></p><br>`;
    divResposta.innerHTML += `<p>O número é inteiro? <strong>${(Number.isInteger(numPrompt) ? "Verdadeiro" : "Falso")}</strong></p><br>`;
    divResposta.innerHTML += `<p>É um NaN? <strong>${(Number.isNaN(numPrompt) ?  "Verdadeiro" : "Falso" )}</strong></p><br>`;
    divResposta.innerHTML += `<p>Arredondado pra baixo <strong>${Math.floor(numPrompt)}</strong></p><br>`;
    divResposta.innerHTML += `<p>Arredondado pra cima <strong>${Math.ceil(numPrompt)}</strong></p><br>`;
    divResposta.innerHTML += `<p>Com dois digítos <strong>${numPrompt.toFixed(2)}</strong></p><br>`;
}
