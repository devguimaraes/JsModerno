const data = new Date;
const diaSemana = data.getDay();
const diaMes = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes()


const nomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const nomeSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Qaurta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"];

const container = document.querySelector(".container")
container.innerHTML = "";
const paragrafo = document.createElement("h3");
paragrafo.innerText = `${nomeSemana[diaSemana]}, ${diaMes} de ${nomeMes[mes]} de ${ano}.
 A hora correta é ${hora}: ${minutos} `;
container.appendChild(paragrafo);