var n1 = Number(prompt('Digite um número: '));
var n2 = Number(prompt('Digite outro número: '));
var s = n1 + n2;
alert('A soma dos valores é: ' + s);
alert('A soma dos valores é: ' + String(s));//converter para uma 'String'

/*
FORMATANDO STRINGS

Ex: var s = 'JavaScript'

'Eu estou aprendendo s'   //Não faz interpolação
'Eu estou aprendendo ' + s   //Usa concatenação
`Eu estou aprendendo ${s}`   //Usa template string

*/

alert(`A soma entre ${n1} e ${n2} é igual a ${s}`)

/*
FORMATANDO STRINGS

Ex: var s = 'JavaScript'

s.length        //quantos caracteres a string tem
s.toUpperCase() //tudo para 'MAIUSCULAS'
s.toLowerCase() //tudo para 'minusculas

*/