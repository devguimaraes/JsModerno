const paragrafos = document.querySelector(".paragrafos");

const p = paragrafos.querySelectorAll("p");
const estilosBody = getComputedStyle(document.body)//pega todos os elementos css do elemento
const backgroundColor = estilosBody.backgroundColor;

for(let pegaParagrafo of p){
   trocaCor(pegaParagrafo);
}





function trocaCor(parametro){
    parametro.style.backgroundColor = backgroundColor;
    parametro.style.color = "white";
}