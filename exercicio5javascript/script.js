function calcularIdades() {
    const anoAtual = new Date().getFullYear();

    var pessoas = [
        { nome: document.getElementById('nome1').value, ano: parseInt(document.getElementById('ano1').value) },
        { nome: document.getElementById('nome2').value, ano: parseInt(document.getElementById('ano2').value) },
        { nome: document.getElementById('nome3').value, ano: parseInt(document.getElementById('ano3').value) },
    ];

    // Calcula as idades
    pessoas.forEach(pessoa => pessoa.idade = anoAtual - pessoa.ano);


    pessoas.sort((a, b) => b.idade - a.idade);


    var  resultado = `
        Pessoa mais velha: ${pessoas[0].nome} - ${pessoas[0].idade} anos<br>
        Segunda pessoa mais velha: ${pessoas[1].nome} - ${pessoas[1].idade} anos<br>
        Terceira pessoa mais velha: ${pessoas[2].nome} - ${pessoas[2].idade} anos
    `;
    document.getElementById('resultado').innerHTML = resultado;
}