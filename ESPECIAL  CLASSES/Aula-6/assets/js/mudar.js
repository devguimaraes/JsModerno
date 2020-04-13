class MudaCor {
    constructor() {
        this.sessao = document.querySelector('.container')
        this.tempoEMtempo()
       
    }

    tempoEMtempo(){
        let timer = setInterval(()=>{
            this.sessao.style.backgroundColor = this.gera_cor()
        }, 1000)

        setTimeout(()=>{
            clearInterval(timer)
        }, 5000)
        
    }

    

    gera_cor(){
        var hexadecimais = '0123456789ABCDEF';
        var cor = '#';
      
        // Pega um número aleatório no array acima
        for (var i = 0; i < 6; i++ ) {
        //E concatena à variável cor
            cor += hexadecimais[Math.floor(Math.random() * 16)];
        }
        return cor;
    }



}

const vai = new MudaCor()