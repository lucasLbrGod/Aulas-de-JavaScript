
let friends = ["deivi", "henrique", "lucas", "ben-hur"]

//           0           1        2        3          5
let TCC = ["Lucas", "Maria", "sophia", "ben-hur", "haniel"];

// transfere de forma completa
let aluno = ["lucas", 12345, true, "Dev. web"]
console.log(aluno); 

// transfere em formato de string
let aluno_strinhg = aluno.toString(); 
console.log(aluno_strinhg);

// join (' == ') converte pra strins e podemos utilizar um caracter para separar os elemntos.
let aluno_join = aluno.join(' | ')
console.log(aluno_join);


let lendas = ["deivi", "henrique", "lucas", "ben-hur"]

// pop() remove o ultimo elemento do array
let new_lendas = lendas.pop()
console.log(lendas);
console.log(new_lendas);

// push puxa um elemeno de fora e add
lendas.push("sophia") 
console.log(lendas);

// shift remove o primeiro elemento
let lendas2 = lendas.shift() 
console.log(lendas);
console.log(lendas2);

// unshift adiciona um  elemento no arrays
lendas.unshift("breno")
console.log(lendas);

// delete ele deleta os elemntos mantento o espaço vazio
console.log(TCC);
delete TCC[2] 
console.log(TCC);


