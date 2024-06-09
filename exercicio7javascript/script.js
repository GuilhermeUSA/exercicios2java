var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var verificar = document.getElementById("verificar");
var resultado = document.getElementById("resultado");

function compararnumeros(){
if(Number(numero1.value) > (numero2.value)){
 resultado.textcontent = "O primeiro numero é Maior"
}
else if (Number(numero1.value)=== Number(numero2.value)){
    resultado.textcontent = "Os Numeros São iguais"
}
else {
    resultado.textcontent = "Numero 1 é o menor"
}

}
 
resultado.onclick = function(){
    compararnumeros();
}