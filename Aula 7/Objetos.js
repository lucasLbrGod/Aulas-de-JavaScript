// class aluno{
//     constructor(nome, idade, curso, matricula, unidade){
//         this.unidade = unidade;
//         this.matriculado = matriculado;
//         this.curso = curso;
//         this.idade = idade;
//         this.nome = nome;


//     }
// }

// let aluno1 = new aluno()

let Aluno1 = {
    nome: "Lucas rosa",
    idade: 18, 
    curso: "Dev. Web",
    matriculado: true ,
    unidade: {
        endereco: "viamão",
        bairro: "santo onofre",
        cep: 94445540,
    }
}

console.log(Aluno1.nome);
console.log(Aluno1.matriculado);
console.log(Aluno1.unidade.endereco);

let aluno2 = {
    nome: "Ben-hur",
    idade: 15, 
    curso: "Dev. Web",
    matriculado: true,
    unidade: {
        endereco: "Av.ipiranga",
        bairro: "partenon",
        cep: 90610001,
    }
}
console.log("************************");

console.log(aluno2.nome);
console.log(aluno2.matriculado);
console.log(aluno2.unidade.endereco);


let Aluno3 = {
    nome: "Maria Eduarda",
    idade: 17, 
    curso: "Dev. Web",
    matriculado: true,
    unidade: {
        endereco: "Rua das Flores",
        bairro: "Centro",
        cep: 90000000,
    }
}
console.log("************************");

console.log(Aluno3.nome);
console.log(Aluno3.matriculado);
console.log(Aluno3.unidade.endereco);