function criarCalculadora() {
    return {
        display: document.querySelector('.displayInput'),

        inicia() {
            this.cliqueBotao()
           
        },
        
        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0,-1);
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta) 
                this.display.value = conta;
            } catch (e) {
                this.display.classList.add('resposta')
                this.display.value = 'Está não é uma conta válida';
            }

        },


        cliqueBotao() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-apagar')){
                    this.apagaUm()
                }

                if(el.classList.contains('btn-igual')){
                    if(!this.display.value){return;}
                    this.realizaConta()
                }

            })
        },
        
    }
        
}

const calculadora = criarCalculadora();
calculadora.inicia()