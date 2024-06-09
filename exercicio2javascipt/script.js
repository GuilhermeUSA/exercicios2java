var numeropessoas = document.getElementById('numeropessoas');
var soma = document.getElementById('soma');
var Ovosnecessarios = document.getElementById('ovosnecessarios');
var queijonecessario = document.getElementById('queijonecessario');

function calculo(){
var numpessoas = (numeropessoas.value);

var ovospessoa = 2;
var queijopessoa = 50;

var totalovospessoa = numpessoas * ovospessoa;
var totalqueijopessoa = numpessoas * queijopessoa;

totalovospessoa.textcontent ="voce vai precisar de:" + totalovospessoa; 
totalqueijopessoa.textcontent = "voce vai precisar de:" + totalqueijopessoa + "gramas";



}

soma.onclick = function() {
    calculo();
}