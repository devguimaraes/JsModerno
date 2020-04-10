//Aula de geter e setter com classes
// const _velocidade = Symbol('velocidade')
// class Carro {
//     constructor(nome) {
//         this.nome = nome;
//         this[_velocidade] = 0
//     }

//     set velocidade(valor){
//         if(typeof valor !== 'number') return
//         if(valor > 100 || valor <= 0) return

//         this[_velocidade] = valor

//     }

//     get velocidade(){
//         return this[_velocidade]
//     }

//     acelerar() {
//         if (this[_velocidade] >= 100) {
//             console.log("Velocidade máxima. Sua velocidade é: " + this[_velocidade])
//             return
//         }
//         this[_velocidade]++;
//         console.log('Velocidade ' + this[_velocidade] + "Km/h")
//     }

//     frear(){
//         if (this[_velocidade] <= 0) {

//             console.log("O carro está parado. Sua velocidade é: " + this[_velocidade])
//             return
//         }
//         this[_velocidade] --;
//     }

// }


// const carro = new Carro('fusca')
// carro.acelerar()
// carro.velocidade = 'arroz'
// console.log(carro.velocidade)

class Pessoa {
    terceiroNome;
    
    set nomeCompleto(valor){
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }

    set terceiroNome(valor2){
        if(typeof valor != "string") return
        this.terceiroNome = valor2
    }

    get terceiroNome(){
        return this.terceiroNome
    }

    
}

const p1 = new Pessoa();

p1.terceiroNome = 'Jamir'
console.log(p1.terceiroNome)
