function Calcular() {
    var number = document.getElementById('numi');
    var res = document.getElementById('res');
    var c = ''
    var num = Number(number.value)
    if(number.value.length == 0){
        alert('[ERRO] Revise seus dados')
    }
    
    else{
        res.innerHTML = ''

        while (c <= 9){
            c++
            res.innerHTML += `${c} x ${num} = ${c * num}<br>`
        }
    }
}
