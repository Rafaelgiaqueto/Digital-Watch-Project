const diaSemana = document.getElementById("diaSemana");
const diaElement = document.getElementById("dia");
const mesElement = document.getElementById("mes");
const anoElement = document.getElementById("ano");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let diaDaSemana = dateToday.toLocaleDateString("pt-BR", { weekday: "long" });
  let dia = dateToday.toLocaleDateString("pt-BR", { day: "numeric" });
  let mes = dateToday.toLocaleDateString("pt-BR", { month: "long" });
  let ano = dateToday.toLocaleDateString("pt-BR", { year: "numeric" });
  let hr = dateToday.toLocaleTimeString("pt-BR", { hour: "2-digit", hour12: false });
  let min = dateToday.toLocaleTimeString("pt-BR", { minute: "2-digit" });
  let s = dateToday.toLocaleTimeString("pt-BR", { second: "2-digit" });

  diaSemana.textContent = diaDaSemana;
  diaElement.textContent = dia;
  mesElement.textContent = mes;
  anoElement.textContent = ano;
  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
});