/*
Pegar dois valores com o window.prompt, fazer a soma dos inteiros é apresentar na tela com alert
*/

let num1 = window.prompt("Digite o primeiro número a ser somado", 0);
let num2 = window.prompt("Digite o segundo número a ser somado");

let result = Number(num1) + Number(num2);

alert(`A soma dos valores apresentados é de ${Number(num1) + Number(num2)}, este valor é do tipo ${typeof(result)}`);