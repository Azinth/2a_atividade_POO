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
