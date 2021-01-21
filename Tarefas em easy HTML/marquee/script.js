// Created Using Easy HTML v1.2.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml


var mensagem = "Curso de JavaScript do Senac Minas!!!";

var texto;
var ligado = false;
var timeoutID = null; 
var posicao = 0; 
var tamanho; 
var janela; 
function ligarMarquee(){  
  if (ligado){
    pararMarquee();
  }
texto = document.form1.marquee.value + mensagem + document.form1.marquee.value; 
  tamanho = texto.length;   
  janela = document.form1.marquee.size;
  
  atualizarMarquee();
  ligado = true;
} 

function pararMarquee(){ 
  if (ligado) {
    
    
   
    document.getElementById('text').value="";
    clearTimeout(timeoutID); 
    ligado = false; 
  
  }
} 

function atualizarMarquee(){ 
  document.form1.marquee.value=texto.substring(posicao++%tamanho, posicao+janela%tamanho);  
  timeoutID = setTimeout("atualizarMarquee()", 100);

} 