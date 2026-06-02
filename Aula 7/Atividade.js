

function calcularIMC(altura, peso){
  let res = (pesso / (altura * altura))

if(res <= 17){
let envia = "Abaixo do peso"

}else if(res >= 18.5 && res <= 24.9){
  let envia = "pesso normal"
 
}else {
  let envia = "acima do peso"
 
}
  return res;

}

let resultado = calcularIMC(1.70, 80)


