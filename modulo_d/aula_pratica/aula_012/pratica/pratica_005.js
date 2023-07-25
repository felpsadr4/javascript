//Crie um programa que calcule o IMC (Índice de Massa Corporal) com base no peso e altura informados, e exiba uma mensagem de acordo com o resultado (abaixo do peso, peso normal, acima do peso, obeso).
var peso = 83
var altura = 1.92
var imc = peso / (altura**2)
console.log(imc.toFixed(3))
if (imc < 18.5){
    console.log('BAIXO PESO')
}else if(imc > 18.5 && imc < 24.9){
    console.log('PESO NORMAL')
}else if(imc > 25 && imc < 29.9){
    console.log('EXCESSO DE PESO')
}else if(imc > 30 && imc < 35){
    console.log('OBESIDADE')
}else if(imc > 35){
    console.log('OBESIDADE EXTREMA!')
}
