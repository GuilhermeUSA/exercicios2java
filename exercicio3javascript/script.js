var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var botaosoma = document.getElementById("botaosoma");
var resultado = document.getElementById("resultado");

function Operacaomatematica(){
    var numero1 = Number(num1.value);
    var numero2 = Number(num2.value);
    
    resultado.innerHTML = "Soma: " + (numero1 + numero2)+ "<br>Subtração: " + (numero1 - numero2) +
     "<br>Multiplicação: " + (numero1 * numero2) +
     "<br>Divisão: " + (numero1 / numero2);



}   
botaosoma.onclick = function (){
    Operacaomatematica();

}