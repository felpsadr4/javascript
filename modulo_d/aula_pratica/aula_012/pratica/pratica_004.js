//Escreva um programa que peça o nome de um dia da semana e verifique se é um dia útil ou um dia de descanso (fim de semana).
var dia = ''
if (dia === 'Domingo' || dia === 'Sábado') {
    console.log('Hoje é final de semana!')
} else if (dia === 'Segunda' || dia === 'Terça' || dia === 'Quarta' || dia === 'Quinta' || dia === 'Sexta') {
    console.log('Hoje é dia de trabalhar')
} else {
    console.log('Digite um dia válido')
}