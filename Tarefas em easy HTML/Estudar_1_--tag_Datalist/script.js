// Created Using Easy HTML v1.2.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

function add(){
  var texto = document.getElementById('texto').value;
 
  document.getElementById('cidades').innerHTML+=
    
    '<option value="'+texto+'">';
  
  document.getElementById('texto').value="";
  
  document.getElementById('texto').autofocus;
  
  }