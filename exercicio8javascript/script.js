var numero = document.getElementById("numero");
var verificar = document.getElementById("verificar");
var resultado = document.getElementById("resultado");


function imparpar() {
    if(Number(numero.value) %2 === 0){
        resultado.textContent = "O numero é Par!!";

    }else{
        resultado.textContent = "O numero é Impar!!"
    }

}