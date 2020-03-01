    const sessao = document.querySelector(".container");
    const divisao = document.createElement("div");
    const div = document.createElement("div")

const elementos = [
    {tag: '<p>', texto: 'Frase Zero'},
    {tag: '<div>', texto: 'Frase One'},
    {tag: '<section>', texto: 'Frase Thre'},
    {tag: '<footer>', texto: 'Frase Two'},
   
]

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    div.innerHTML += `${tag} ${texto}`
    divisao.appendChild(div)

    
}
    
sessao.appendChild(divisao)