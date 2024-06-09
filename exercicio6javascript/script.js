informenota = document.getElementById("informenota");
soma = document.getElementById("soma");
resultado = document.getElementById("resultado");

function somaderesultado(){
if(Number(informenota.value) >= 6) {
    resultado.textcontent = "Aprovado";

}

else if ( Number(informenota.value)< 6 && Number(informenota.value) >= 4 ) {
    resultado.textcontent = "Precisa de Recuperação";

}

else {
    resultado.textcontent = "Reprovado"

}


 

}

soma.onclick = function (){
    somaderesultado();
}