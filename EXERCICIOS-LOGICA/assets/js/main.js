function escopo() {
    const formulario = document.querySelector("#calcImc");
   

    function Calculando(evento) {
        evento.preventDefault()
        const peso = document.querySelector("#peso").value;
        const tamanho = Number(document.querySelector("#altura").value);
        const divResposta = document.querySelector(".resposta");

        function alertar(){
            alert("Alertar qualquer coisa")
        }
        const calculadora = (peso / (tamanho * tamanho));
        
        if (calculadora > 0 && calculadora < 18.5) {
            let respostaIMC = document.querySelector(".pesoMagro");
            respostaIMC.style.backgroundColor = "red";
            respostaIMC.style.color = "white";
            divResposta.innerHTML += `<p>Seu iMC é ${calculadora.toFixed(2)}</p>`;
            divResposta.style.backgroundColor = "red";
            divResposta.style.color = "white";


        }else if (calculadora >= 18.5 && calculadora <= 24.9) {
            let respostaIMC = document.querySelector(".pesoNormal");
            respostaIMC.style.backgroundColor = "red";
            respostaIMC.style.color = "white";
            divResposta.innerHTML = `<p>Seu iMC é ${calculadora.toFixed(2)}</p>`;
            divResposta.style.color = "black";
            divResposta.style.backgroundColor = "yellow";

        } else if (calculadora >= 25 && calculadora <= 29.9) {
            let respostaIMC = document.querySelector(".acimaDoPeso");
            respostaIMC.style.backgroundColor = "red";
            respostaIMC.style.color = "white";
            divResposta.innerHTML = `<p>Seu iMC é ${calculadora.toFixed(2)}</p>`;
            divResposta.style.backgroundColor = "red";
            divResposta.style.color = "white";

        } else if (calculadora >= 30 && calculadora <= 34.9) {
            let respostaIMC = document.querySelector(".obesidade1");
            respostaIMC.style.backgroundColor = "red";
            respostaIMC.style.color = "white";
            divResposta.innerHTML = `<p>Seu iMC é ${calculadora.toFixed(2)}</p>`;
            divResposta.style.backgroundColor = "red";
            divResposta.style.color = "white";

        } else if (calculadora >= 35 && calculadora <= 39.9) {
            let elementosResposta = document.querySelector(".obesidade2");
            elementosResposta.style.backgroundColor = "red";
            elementosResposta.style.color = "white";
            divResposta.innerHTML = `<p>Seu iMC é ${calculadora.toFixed(2)}</p>`;
            divResposta.style.backgroundColor = "#008000 ";

        } else if (calculadora >= 40) {
            let elementosResposta = document.querySelector(".obesidade3");
            elementosResposta.style.backgroundColor = "red";
            elementosResposta.style.color = "white";
            divResposta.innerHTML = `<p>Seu iMC é ${calculadora.toFixed(2)}</p>`;
            divResposta.style.backgroundColor = "red";
            divResposta.style.color = "white";
        }

    












    }


    formulario.addEventListener("submit", Calculando);






}

escopo();