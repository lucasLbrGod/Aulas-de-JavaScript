let media = 7.1342
// media.nome 

console.log(`A media do aluno é: ${media.toFixed(1)}`); //fixa numeros depois da virgula {media.toFixed(1)}

let name = 'Lucas santos Rosa'
let curso = 'Instituto Percorre'

console.log(typeof name);// tipo de dado
console.log(name.length); // valor numerico da var
console.log(curso.charAt(10)); // acesso ao caracter 
console.log(curso.toUpperCase()); // deixa todo o texto em capslock
console.log(curso.toLowerCase());// deixa todo o texto em minusculo
console.log(curso.substring(10)); //pega o numero do caracter ate o outro: EX 1/10
console.log(curso.substring(13,18));// pega o numero do caracter ate o outro: EX 13/17
console.log(name.substring(13,17)); // mais exemplo 

let novo_nome = name.split(' '); // deixa texto todo separado por ''
console.log(novo_nome);

let nome2 = name.replace('Rosa', 'barros') // troca uma palavra por outra 
console.log(nome2);










