//exercicio final modulo 1
function meuEscopo(){
    const formulario = document.querySelector(".form");
    const resultado = document.querySelector("#resultado");
    let pessoa = [];
    

    function recebeEvento(evento){
        evento.preventDefault();

        const nome = formulario.querySelector(".nome").value;
        const sobrenome = formulario.querySelector(".sobrenome").value;
        const peso = formulario.querySelector(".peso").value;
        const altura = formulario.querySelector(".altura").value;
        
        pessoa.push({nome, sobrenome, peso, altura});
        console.log(pessoa);
        
        for (let dados in pessoa){
           return resultado.innerHTML += `<p>Nome: ${nome} Altura: ${altura} Peso:${peso} Altura${altura}<br>`;
        }

     
    };


    formulario.addEventListener("submit", recebeEvento)
};

meuEscopo();