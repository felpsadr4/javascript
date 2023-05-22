var nome = prompt('Qual é seu nome?')
document.write(`Olá <strong>${nome}</strong>! seu nome tem ${nome.length} letras. <br/>` ) 
document.write(`Seu nome em maúsculas é ${nome.toUpperCase()} <br/>`)
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}`)


/*
FORMATANDO NÚMEROS

Ex:     var n1 = 1545.5

n1.toFixed(2);     //Fixa em máximo duas casas após a vírgula

n1.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});     //Converte o valor para o real R$ brasileiro para mudar de reais para dolar ou euro, é só trocar 'BRL' para 'USD' ou 'EUR'


*/