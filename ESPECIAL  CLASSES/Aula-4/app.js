//Aula sobre metodos de instâncias e estáticos

class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0;
    }
    //metodos de instancia
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    //metodos estaticos 
    static pegarAlgo(){
        console.log('Pronto, peguei algo')
    }
}

const controle = new ControleRemoto('Sonny')
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
ControleRemoto.pegarAlgo()
console.log(controle)