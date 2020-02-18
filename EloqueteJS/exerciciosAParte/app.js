function escopo(){
    let dadosCliente = [];
    let divResposta = document.querySelector("#resposta");
    let formulario = document.querySelector(".form");
    let contador = 0;

    //Cancelando o btn enviar.
    formulario.addEventListener("submit", cancelaBtn);

    function cancelaBtn(evento){
        evento.preventDefault();

        let nomeForm = document.querySelector("#nome").value;
        let sobrenomeForm = document.querySelector("#sobrenome").value;   
        let pesoForm = document.querySelector("#peso").value;
        let alturaForm = document.querySelector("#altura").value;
        
        dadosCliente.push({
            nome: nomeForm, 
            sobrenome: sobrenomeForm,
            peso: pesoForm,
            altura: alturaForm
        });

        for(dados in dadosCliente){
            
            return divResposta.innerHTML += `<p>Nome: ${nomeForm}, Sobrenome: ${sobrenomeForm}, Peso:${pesoForm}, Altura: ${alturaForm}</p>`;
        }
        

        
    };

   


}

escopo();