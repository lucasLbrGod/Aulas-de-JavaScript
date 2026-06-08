let elementoH1 = window.document.getElementById("titulo"); //seleciona o elemento h1 atraves do id
elementoH1.innerHTML = "aula - data de hoje: 08/06/2026"; 

let elementoP = window.document.getElementsByTagName("p"); //seleciona os elementos p atraves da tag
// let elementoP = window.document.getElementsByClassName("par"); //seleciona os elementos p atraves da classe
// elementoP[0].style.color = "red";

for (let cont = 0; elementoP.length > cont ; cont++) {
   elementoP[cont].style.color = "red";

}