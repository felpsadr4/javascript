//Faça um programa que verifique se um ano é bissexto.
var ano = 2023;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é um ano bissexto`);
} else {
    console.log(`${ano} não é um ano bissexto`);
}
