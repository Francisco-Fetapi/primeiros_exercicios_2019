// Created Using Easy HTML v1.2.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

function relogio(){ 
 tempo=new Date(); 
 hora=tempo.getHours(); 
 min=tempo.getMinutes(); 
 sec=tempo.getSeconds(); 
 if(sec<10){ 
 sec="0"+sec; 
 } 
 defaultStatus=hora+":"+min+":"+sec; 
 setTimeout("relogio()","1000"); 
   
//   document.writeln("<h1>"+hora+":"+min+":"+sec;+"</h1>");
} 