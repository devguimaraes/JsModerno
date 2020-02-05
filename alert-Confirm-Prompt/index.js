//Alert Confirm e Prompt - Poup-ups na tela


//alert("Ooi oii oi!! ") - Um alerta é emitido antes do carregamento da página
//confirm("Hello World") - Um alerta de confirmação é emitido a página; 
/*
let idade = window.prompt("Qual é a sua idade?", 40);
idade = parseInt(idade);

confirm(`Olá, usuário. Sua idade é ${idade}`);

*/

let resposta = confirm("Você é maior de 18 anos?");

if (resposta == true){
   document.write("<h1>Vem tocar punheta caralhooo!!! huhsuahsuh</h1>")
}else{
   document.write("Rala daqui seu mlk!! vc é de menor ainda");
}