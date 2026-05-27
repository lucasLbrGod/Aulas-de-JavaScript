let valor = Number(prompt(`digite o valor do produto`))

let descontos = prompt(`escreva um dos descontos disponiveis`)

switch (descontos) {
    case "desc1": {
    let desconto1 = ( valor * 0.05)

    let final1 = ( valor - desconto1)

    let enviar = (`Valor do produto: R$ ${valor}
Desconto aplicado: 5%
Valor do desconto: R$ ${desconto1}
Valor final: R$ ${final1}`);
    alert(enviar);
    }

break
case "desc2": {
    let desconto2 = ( valor * 0.10)

    let final2 = ( valor - desconto2)

    let enviar = (`Valor do produto: R$ ${valor}
Desconto aplicado: 10%
Valor do desconto: R$ ${desconto2}
Valor final: R$ ${final2}`);
    alert(enviar);
}

break;
case "desc3": {
    let desconto3 = ( valor * 0.15)

    let final3 = ( valor - desconto3)

    let enviar = (  `Valor do produto: R$ ${valor}
Desconto aplicado: 15%
Valor do desconto: R$ ${desconto3}
Valor final: R$ ${final3}`);
    alert(enviar);
}

break;
case "desc4":{
    let desconto4 = ( valor * 0.20)
    let final4 = ( valor - desconto4)

    let enviar = (   `Valor do produto: R$ ${valor}
Desconto aplicado: 20%
Valor do desconto: R$ ${desconto4}
Valor final: R$ ${final4}`);
    alert(enviar);
}

break;
case "desc5": {

    let desconto5 = ( valor * 0.25)
    let final5 = ( valor - desconto5)

    let enviar = ( `Valor do produto: R$ ${valor}
Desconto aplicado: 25%
Valor do desconto: R$ ${desconto5}
Valor final: R$ ${final5}`);
    alert(enviar);
}
break;

break;
default:

alert('invalido');
        break;
}




