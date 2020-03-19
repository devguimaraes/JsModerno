//Aula sobre funções fábricas ou funções contrutoras

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        altura, 
        peso,


        //Metodo Getters
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        
        set setarNome(nomeInteiro){
            const nomeGeral = nomeInteiro.split(' ')
            this.nome = nomeGeral.shift(),
            this.sobrenome = nomeGeral.join(' ')
        },
        
        //Metodo getter
        get imc(){
            const resultadoImc = this.peso / (this.altura ** 2)
            return `O resultado do IMC do paciente ${this.nome} é ${resultadoImc.toFixed(2)}`
        }
    }
}
let p1 = criaPessoa('Bruno', 'Guimaraes', 1.80, 74)
p1.setarNome = 'Adalberto Lira Menezes';

console.log(p1.nomeCompleto)
console.log(p1.imc)