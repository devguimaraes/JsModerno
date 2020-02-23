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
            if (calculadora > 0 && calculadora < 18.5) return pegaItem(".pesoMagro", calculadora, "green")
            if (calculadora >= 18.5 && calculadora <= 24.9) return pegaItem(".pesoNormal", calculadora, "green")
            if (calculadora >= 25 && calculadora <= 29.9) return pegaItem(".acimaDoPeso", calculadora, "yellow")
            if (calculadora >= 30 && calculadora <= 34.9) return pegaItem(".obesidade1", calculadora, "red")
            if (calculadora >= 35 && calculadora <= 39.9) return pegaItem(".obesidade2", calculadora, "red")
            if (calculadora >= 40) return pegaItem(".obesidade3", calculadora, "red")
        }

    }///termina a função 
    function pegaItem(parametro, calculadora, cor) {
        let respostaIMC = document.querySelector(parametro)
        respostaIMC.style.backgroundColor = "red";
        divResposta.innerHTML += `<p>Seu iMC é ${calculadora.toFixed(2)}</p>`;
        divResposta.style.backgroundColor = cor;
        divResposta.style.color = "white";
    }

    formulario.addEventListener("submit", Calculando);
}

escopo();