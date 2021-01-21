// Created Using Easy HTML v1.2.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

function Colorir(){

var cor = document.getElementById('cor').value;

  var coor= document.getElementsByTagName('body');
  
  
  coor[0].bgColor = cor;
document.getElementById('text').value=cor;
  


  }