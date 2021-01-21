// Created Using Easy HTML v1.2.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml


do{

var num1 =window.prompt("Qual é o 1º número?");
 num1 = Number(num1);
var num2 = window.prompt("Qual é o 2º número?");
 num2 = Number(num2);
var total = num1 + num2;
alert(num1+" + "+num2+" = "+total);

  
 var resp = window.prompt("Quer continuar?");
  
} while(resp =="s" || resp=="S");