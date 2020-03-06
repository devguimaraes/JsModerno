const relogio = document.querySelector(".relogio");
const btnIniciar = document.querySelector(".iniciar");
const btnPausar = document.querySelector(".pausar");
const btnZerar = document.querySelector(".zerar");


let segundos = 0;
let timer;


function iniciaRelogio(){
        timer = setInterval(function(){
        segundos++
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}


function getTimeFromSeconds(segundos){
    const dataSeconds = new Date(segundos * 1000)
    return dataSeconds.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'GMT' 
    })
}



btnIniciar.addEventListener('click', function(){
    relogio.classList.remove("pausado")
    clearInterval(timer)
    iniciaRelogio() 
})


btnPausar.addEventListener('click', function(){
  clearInterval(timer)
  relogio.classList.add("pausado")
})

btnZerar.addEventListener('click', function(){
    relogio.classList.remove("pausado")
    relogio.innerHTML = "<p>00:00:00</p>";
    clearInterval(timer)
    segundos = 0;       
})
