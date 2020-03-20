function Calculadora() {
    const display = document.querySelector('.displayInput');


    this.iniciaCalculadora = () => pegarNumero();

    escreveInput = (valor) => {
        display.value += valor;
    }

    apagarInput = () => {
        display.value = '';
        display.focus()
    }

    apagarUm = () => {
        display.value = display.value.slice(0, -1)
    }

    realizaConta = () => {
        try {
            let conta = display.value;

            if (!conta)return;

            conta = eval(display.value)
            display.value = conta;
        } catch (e) {
            display.classList.add('resposta')
            display.value = 'Está não é uma conta válida';
            setTimeout(()=>{
                apagarInput()
            }, 2000)
        }
    }

    pegarNumero = () => {
        document.addEventListener('click', (e) => {
            const tecla = e.target;
            if (tecla.classList.contains('btn-num')) escreveInput(tecla.innerText);
            if (tecla.classList.contains('btn-clear')) apagarInput();
            if (tecla.classList.contains('btn-apagar')) apagarUm();
            if (tecla.classList.contains('btn-igual')) realizaConta()
        })
    };

    display.addEventListener('keypress', (e)=>{
        const el = event.key
        if(el === 'Enter'){
            realizaConta()
        }
    })

    document.addEventListener('dblclick', (e)=>{
        const elemento = e.target;
        if(elemento.classList.contains('btn-igual')){
            apagarInput()
            display.focus()
        }
    })
}

const calc = new Calculadora()
calc.iniciaCalculadora();