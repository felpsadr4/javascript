//Faça um programa que verifique se um número é divisível por 3 e por 5 ao mesmo tempo.
var num = 25
if(num % 3 === 0  && num % 5 === 0){
    console.log(`O número ${num} pode ser divisível por 3 e por 5`)
}else{
    console.log(`O número ${num} não é divisível por 3 e por 5 ao mesmo tempo`)
}