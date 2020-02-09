let numero = Number(prompt("Digite um número otário"));
if(!Number(numero)){
    alert(`Não é um número`);
    let textoDiv = document.getElementById("texto");
    const NotANumber = Number.isNaN(numero);
    textoDiv.innerHTML += `<p>É um NaN? ${NotANumber}<br></p>`;
}else{
   


//Cálculos
const raizQuadrada = Math.sqrt(numero);
const inteiro = Number.isInteger(numero);
const NotANumber = Number.isNaN(numero);
const numMax = Math.ceil(numero);
const numMin = Math.floor(numero);
const decimais = numero.toFixed(2);


let numeroTela;
if(inteiro == true){
    numeroTela = "Verdadeiro";
}else{
    numeroTela = "Falso";
}


//Elementos da página
let numeroTitulo = document.getElementById("titulo");

//Números na Tela
numeroTitulo.innerHTML = numero;

let textoDiv = document.getElementById("texto");
textoDiv.innerHTML = `<p>A raiz quadrade de ${numero} é ${Math.round(raizQuadrada)} <br></p>`;
textoDiv.innerHTML += `<p>O número é inteiro? ${numeroTela}<br></p>`;
textoDiv.innerHTML += `<p>É um NaN? ${NotANumber}<br></p>`;
textoDiv.innerHTML += `<p>O menor número é ${numMin}`;
textoDiv.innerHTML += `<p>O maior número é ${numMax}<br>`;
textoDiv.innerHTML += `Número com dois digitos ${decimais}`;
}