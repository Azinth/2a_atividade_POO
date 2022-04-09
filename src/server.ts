//1ª questão

const prompt = require("prompt-sync")();

function somaDosN (num1:int,num2:int){

  let soma = 0;
  if (num1<num2) {
    for (let i = (num1+1); i < num2; i++) {
      soma += i;}
  } else {
    for (let i = (num2+1); i < num1; i++) {
      soma += i;
  }

  }
  return soma;
};

let a = parseInt(prompt("digite o primeiro número positivo: "))
let b = parseInt(prompt("digite o segundo número positivo: "))

console.log(`a soma dos números inteiros no intervalo entre os dois números é igual a ${somaDosN(a,b)}`);

//2ª questão

class Pessoa{
  nome: string;
  idade: number;

  constructor(nome:string, idade: number){
    this.nome = nome;
    this.idade = idade;
  }

   idadeMeses(): void{
     this.idade = idade*12
     console.log(`você tem ${this.idade} meses de idade`)
   }

}

let nomeP = prompt('digite seu nome: ')
let idade = parseInt(prompt('digite a sua idade: '))

let pessoa = new Pessoa(nomeP, idade) //esse new serve para adicionar o novo objeto, pq podem haver outros.

console.log(`olá ${nomeP}!`)
pessoa.idadeMeses()
