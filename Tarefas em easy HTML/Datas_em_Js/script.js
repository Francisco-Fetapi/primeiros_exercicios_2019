// Created Using Easy HTML v1.2.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

function es(texto){
  document.writeln(texto);
  }
function quebra(){
  es("<br/>");
  es("<br/>");
  }


es("<center><h1>Datas com JavaScript</h1>");

var data = new Date();

es("getDate() ----Dia do mes: "+ data.getDate());
quebra();
es("getDay()--- (0=Dom) -- dia da semana: "+data.getDay());
quebra();
es("getFullYear() -- Ano:  "+data.getFullYear());
quebra();
es("getHours() ---- Hora:  "+data.getHours());
quebra();
es("getMinutes() --- Minutos:  "+data.getMinutes());
quebra();
es("getSeconds() --- Segundos:  "+data.getSeconds());
quebra();
es("getMilliseconds() --- Milissegundos: "+data.getMilliseconds());
quebra();
es("getMonth() ---(0=Jan) Mes do ano:  "+data.getMonth());
quebra();


