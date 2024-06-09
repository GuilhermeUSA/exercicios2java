var cotacaodolar = document.getElementById('cotacaodolar');
var somar = document.getElementById('somar');
var um = document.getElementById('1');
var dois = document.getElementById('2');
var cinco = document.getElementById('5');
var dez = document.getElementById('10');

function calcularporcentagens(){
 var valor = (cotacaodolar.value);

 var p1 = (valor *1* 0.01) + valor;
 um.textContent = p1
 var p2 = (valor *1* 0.02) + valor;
 dois.textContent = p2
 var p5 = (valor *1* 0.05) + valor;
 cinco.textcontent = p5 
 var p10 = (valor *1* 0.1) + valor;
 dez.textcontent = p10 

}

somar.onclick = function () {
    calcularporcentagens()

}