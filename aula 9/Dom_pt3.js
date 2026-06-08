// function calculaMedia() {
//     let nota1 = document.getElementById("nota1").value;
//     let nota2 = document.getElementById("nota2").value;
//     let media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
//     document.getElementById("media").innerText = media;
// }

let calcularMedia = () => {
    let nota1 = Number(document.querySelector("#nota1").value);
    let nota2 = Number(document.querySelector("#nota2").value);
    let media = (nota1 + nota2) / 2;
    
   texto.innerHTML = `Sua média é: ${media.toFixed(2)}`;
}