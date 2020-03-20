function Caluladora() {
    this.display = document.querySelector('.displayInput')

    this.inicia = () => {
        this.capturaCliques();
    }

    this.capturaCliques = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearInput();
            if (el.classList.contains('btn-apagar'))  this.apagar();
            if (el.classList.contains('btn-igual')) this.fazerConta();
        });
    };
    this.addNumDisplay = el => this.display.value += el.innerText;

    this.clearInput = ()=>{
        this.display.value = '';
        this.display.focus()
    };

    this.apagar = ()=>{
        this.display.value = this.display.value.slice(0,-1)
    }

    this.fazerConta = ()=>{
        try {
            let conta = this.display.value;
            conta = eval(conta);
            if(!conta)return;
            this.display.value = conta
        } catch (e) {
            this.display.classList.add('resposta');
            this.display.value = 'Está não é uma conta válida';

            setTimeout(()=>{
                this.display.value = '';
                this.display.focus()
            },2000)
            
        }
    }
}

const calculadora = new Caluladora();
calculadora.inicia();