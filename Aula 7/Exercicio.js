const calcularIMC = () => {
    let men = "Aqui vamos calcular seu IMC";
    alert(men);

let altura = parseFloat(prompt("Sua altura em metros (ex: 1.70)"));
let peso = parseFloat(prompt("Seu peso"));

function calcularIMC(altura, peso) {
    let res = peso / (altura * altura);

    if (res < 18.5) {
        alert("Abaixo do peso");
    } else if (res <= 24.9) {
        alert("Peso normal");
    } else {
        alert("Acima do peso");
    }

    return res;
}

let resultado = calcularIMC(altura, peso);
alert("Seu IMC é: " + resultado.toFixed(2));
}

const coverterMoeda = () => {
function coverterMoeda(valor, moeda) {
    let reais = parseFloat(prompt("Digite o valor em reais:"));
    let euro = reais / 5.82;
    return euro;
}
    alert("O valor em Euros convertido é: " + coverterMoeda().toFixed(2));
}