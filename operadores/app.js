//OPERADORES ARITMÉTICOS 
/*
    + Adição / Concatenação
    / Divisão 
    * Multiplicação 
    ** Potenciação 
    % Resto da divisão

*/

const num1 = 10;
const num2 = 5;
console.log(num1 + num2);//Adição
console.log(num1 - num2);//subtração
console.log(num1 * num2);//Multiplicação
console.log(num1 ** num2);//Potenciação
console.log(num1 % num2);//resto da divisão

/*
Para alterar as precedências vc precisa colocar as contas entre parênteses. Segue a ordem de precedência:

() - Parenteses
** - Potenciação
*  -  Multiplicação 
/  -  Divisão
%  -  Resto
+  -  Soma 
-  - Subtração


++ = incremento
-- = decremento
*/

console.log(num1 + (num2 * num2));

//Incremento e decremento
const passo = 4;
let soma = "100";
Number(soma)

//soma += passo; O simbolo de += soma é calula o valor diretamente. São chamados de operador de atribuição


console.log("A soma foi de ", ++soma);//incremento
console.log("A subtração foi de ", --soma);//Decremento
