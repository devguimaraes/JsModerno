//Aula sobre o objeto DATE

 //Pega data, hora, minutos e segundos
// const tres = 60 * 60 * 3 * 1000 
// const data = new Date(0 + tres)//adiciona data é adiciona três pra eliminar o fuso horário do servidor
const data = new Date;
const dia = data.getDate();//Pega o dia do mês
const mes = data.getMonth()//Os meses começam em 0 - Jan = 0, fev = 1 ...
const ano = data.getFullYear()//Pega o ano
const hora = data.getHours();//Pega a hora
const minutos = data.getMinutes()//Minutos
const diaSemana = data.getDay()//Dia começa no 0 = domingo
const dateComplet = data.toString();//Data completa


console.log(dateComplet)
