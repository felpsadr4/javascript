/*
TODA FUNÇÃO (PODE) TER OS SEGUINTES FATORES:

-CHAMADA

-PARÂMETRO

-AÇÃO

-RETORNO

- Funções, são AÇÕES executadas assim que são CHAMADAS ou em decorrência de algum EVENTO.

- Uma FUNÇÃO pode receber PARÂMETROS e retornar um RESULTADO.
*/

function parimpar(n){
    if (n%2==0){
        return 'Par!'
    } else{
        return 'Impar!'
    }
}
console.log(parimpar(3))
