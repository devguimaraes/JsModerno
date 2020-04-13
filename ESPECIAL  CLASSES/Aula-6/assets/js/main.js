class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos()
        const senhaValidas = this.senhasValidas()

        if(camposValidos && senhaValidas){
            this.formulario.submit()
        }
    }


    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll(".error-txt")) {
            errorText.remove()
        }


        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.parentElement.innerText
            if (!campo.value) {
                this.criaError(campo, `"${label}" não podem estar em branco`);
                valid = false
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false
            }


        }

        return valid

    }

    senhasValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetirSenha')
    
        if(senha.value !== repetirSenha.value){
            valid = false
            this.criaError(senha, 'As senhas não conferem')
            this.criaError(repetirSenha, 'As senhas não conferem')
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaError(senha, 'A senha precisa conter de 6 a 12 caracteres')
            this.criaError(repetirSenha, 'A senha precisa conter de 6 a 12 caracteres')
        }

        return valid

    }





    validaUsuario(campo){
        const usuario = campo.value
        let valid = true;
    

        if(usuario.length < 3 || usuario.length > 12){
            this.criaError(campo, 'Usuário deve contar de 3 a 12 caracteres')
            valid = false
        }

        if(!usuario.match(/[a-zA-Z0-9]+$/g)){
            this.criaError(campo, 'Nome de usuário precisar conter apenas letras e/ou número')
            valid = false
        }

        return valid
    }


    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value)
        if(!cpf.valida()){
            this.criaError(campo, 'CPF inválido')
            return false;
        }
        return true
    }



    criaError(campo, msg) {
        const div = document.createElement('div');
        div.classList.add('error-txt')
        div.innerHTML = msg
        campo.insertAdjacentElement('afterend', div);
    }



}

const valida = new ValidaFormulario();
