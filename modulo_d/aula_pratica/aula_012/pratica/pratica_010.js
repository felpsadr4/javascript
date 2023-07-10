//Escreva um programa que solicite a nota de um aluno e verifique se ele foi aprovado (nota maior ou igual a 7) ou reprovado (nota menor que 7).
var nota = 7.5
if(nota < 7){
    console.log('Você está em RECUPERAÇÃO!')
    console.log('Se esforce')
} else if(nota == 7){
    console.log('Você foi aprovado, atingiu a meta')
} else if(nota > 7){
    console.log('Meus PARABÉNS, você está APROVADO!!')
}