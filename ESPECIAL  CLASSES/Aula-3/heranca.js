//Aula sobre herança com classes

class DispositivoEltronico {
        
    ligado = false;

    set setNome(nome){
        this.nome = nome
    }

    get getNome(){
        return this.nome
    }

 

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' Já está ligado')
            return
        }
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' Já está desligado')
            return
        }
        this.ligado = false;
    }
}


class smarthphone extends DispositivoEltronico{
    constructor(nome, empresa, cor, modelo){
        super(nome);
        this.empresa = empresa;
        this.cor = cor;
        this.modelo = modelo
        
        
        Object.defineProperties(this, {
            empresa:{
                enumerable: true,
                configarable: false
            },
            cor:{
                enumerable: true,
                configarable: false
            },
            modelo:{
                enumerable: true,
                configarable: false
            }
        })
    }
}


class Relogio extends DispositivoEltronico{


    set definir(nomeMarca){
        this.marca = nomeMarca;
    }

    get devolveMarca(){
        return this.marca
    }
}

const relogio = new smarthphone('relogio suiço', 'ferrari', 'vermelho', '2020')
console.log(relogio)