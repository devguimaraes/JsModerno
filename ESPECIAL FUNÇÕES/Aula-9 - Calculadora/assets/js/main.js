function criarCalculadora() {
    return {
        display: document.querySelector('.displayInput'),

        inicia() {
            this.cliqueBotao()
           
        },
        
<<<<<<< HEAD
        btnParaDisplay(valor){
            this.display.value += valor;
        },
=======
>>>>>>> a8e2e4484e364afeb74a872d6af172cb3850d0e3

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
                    this.realizaConta()
                }

            })
        },
<<<<<<< HEAD
        
=======
        btnParaDisplay(valor){
            this.display.value += valor;
        },
>>>>>>> a8e2e4484e364afeb74a872d6af172cb3850d0e3
    }
        
}

const calculadora = criarCalculadora();
calculadora.inicia()