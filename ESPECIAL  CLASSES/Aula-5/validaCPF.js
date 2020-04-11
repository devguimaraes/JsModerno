//cpf 705.484.450-52 070.987.720-03
//replace (/\D+/g, '')

class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })

    }

    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }


    gerarNovoCPF(){
        const cpfSemDigito = this.cpfLimpo.slice(0,-2)
        const digitoUm = ValidaCPF.geraDigito(cpfSemDigito)
        const digitoDois = ValidaCPF.geraDigito(cpfSemDigito + digitoUm)
        this.novoCPF = cpfSemDigito + digitoUm + digitoDois
    }

    static geraDigito(cpfSemDigito){
      let total = 0
      let recursivo = cpfSemDigito.length + 1

      for(let stringNumerica of cpfSemDigito){
        
        total += recursivo * Number(stringNumerica)
        recursivo --;
      }
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0'

    }

    valida(){
        if(!this.cpfLimpo) return false
        if(this.cpfLimpo.length != 11){
            return 'O CPF deve ter 11 caracteres'
        }
        if(this.sequencia()){
            return 'Esta é uma sequencia não válida'
        }
        this.gerarNovoCPF()
        
       if(this.novoCPF === this.cpfLimpo){
           return 'CPF valido'
       }else{
           return 'CPF inválido'
       }
        
    }
}

const cpf = new ValidaCPF('128.143.207-50')
console.log(cpf.valida())