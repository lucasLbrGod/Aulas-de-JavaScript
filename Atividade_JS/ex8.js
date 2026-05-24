let men = "aqui vamos calcular seu IMC"
alert(men)
let altura = parseFloat(prompt(`sua altura em metro ex: 1.70`))
let pesso = parseFloat(prompt(`seu pesso`))

let res = (pesso / (altura * altura))
if(res >= 18.5 && res <= 25.9){
let envia = "saudavel"
alert(envia)
console.log(res)

}else{
  let envia = "Não saudavel"
  alert(envia)
}