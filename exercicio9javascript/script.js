var numerodealunos = document.getElementById("numerodealunos");
var quantidadedeturmas = document.getElementById("quantidadedeturmas");
var resultado = document.getElementById("resultado");
var numeroturmas = document.getElementById("numeroturmas");

function calcularturma(){
    var calculo = math.floor (Number(numerodealunos.value) / Number(quantidadedeturmas.value));
    var resto = Number(numerodealunos.value) % Number(quantidadedeturmas.value);
    resultado.innerHTML = "Alunos para cada turma" + calculo + "Alunos de sobra" + resto;


}
numeroturmas.onclick = function(){
    calcularturma();
}