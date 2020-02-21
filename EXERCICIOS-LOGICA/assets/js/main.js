function escopo() {
    const formulario = document.querySelector("#calcImc");
    const divResposta = document.querySelector(".resposta");


    function Calculando(evento) {
        evento.preventDefault()
        const peso = document.querySelector("#peso").value;
        const tamanho = Number(document.querySelector("#altura").value);
        
        if (!peso || !tamanho) {
            let retorno = document.querySelector(".resposta");
            retorno.style.backgroundColor = "#FFA500";
            retorno.innerHTML = "<p>Peso ou altura inválidos</p>";
        } else {
            const calculadora = (peso / (tamanho * tamanho));
            semNome(calculadora);
        }

        function semNome(calculadora) {
            if (calculadora > 0 && calculadora < 18.5) {
                pegaItem(".pesoMagro");
                escreveNaTela(calculadora, "green")
            } else if (calculadora >= 18.5 && calculadora <= 24.9) {
                pegaItem(".pesoNormal");
                escreveNaTela(calculadora, "green")
            } else if (calculadora >= 25 && calculadora <= 29.9) {
                pegaItem(".acimaDoPeso");
                escreveNaTela(calculadora, "yellow")
            } else if (calculadora >= 30 && calculadora <= 34.9) {
                pegaItem(".obesidade1");
                escreveNaTela(calculadora, "red")
            } else if (calculadora >= 35 && calculadora <= 39.9) {
                pegaItem(".obesidade2");
                escreveNaTela(calculadora, "red")
            } else if (calculadora >= 40) {
                pegaItem(".obesidade3")
                escreveNaTela(calculadora, "red")
            }
        }

    }
    function pegaItem(parametro) {
        let respostaIMC = document.querySelector(parametro)
        respostaIMC.style.backgroundColor = "red";
        respostaIMC.style.color = "white";
        respostaIMC.style.backgroundColor = "red";
        respostaIMC.style.color = "white";
    }

    function escreveNaTela(calculadora, cor) {
        divResposta.innerHTML += `<p>Seu iMC é ${calculadora.toFixed(2)}</p>`;
        divResposta.style.backgroundColor = cor;
        divResposta.style.color = "white";
    }


    formulario.addEventListener("submit", Calculando);

}

escopo();