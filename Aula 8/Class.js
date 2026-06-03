class Aluno {
    constructor(_nome, ra, curso, matricula) {
        this.nome = _nome;
        this.ra = ra;
        this.curso = curso;
        this.matricula = matricula;
    }

    alunoFaz() {   
        return `${this.nome} fala Gabriell`
    }

}

let aluno1 = new Aluno("joão", 123456, "ADS", 2023000000);
let aluno2 = new Aluno("Maria", 654321, "Engenharia", 2023000001);
let aluno3 = new Aluno("Lucas", 111222, "Programação", 2023000002);

console.log(aluno1);
console.log(aluno1.alunoFaz());
console.log(aluno2);
console.log(aluno2.alunoFaz());
console.log(aluno3);
console.log(aluno3.alunoFaz());

class Carro {
    constructor(marca, modelo, cor, ano) { 
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

     mostrarModelo() {
        console.log("Modelo do carro: " + this.modelo);
    }

    mensagem() {
        return `O carro ${this.modelo} é da marca ${this.marca}.`;
    }
}

    let carro1 = new Carro("Toyota", "Corolla", "Prata", 2022);
    let carro2 = new Carro("Honda", "Civic", "Preto", 2023);

carro1.mostrarModelo();
console.log(carro1.mensagem());

carro2.mostrarModelo();
console.log(carro2.mensagem());