function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var novoWidth = 250;
        var novoHeight = 250;
        img.width = novoWidth;
        img.height = novoHeight;
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12){
                img.setAttribute('src', 'crianca_mas.png') 
            } else if (idade < 23){
                img.setAttribute('src', 'jovem_mas.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto_mas.png')
            } else {
                img.setAttribute('src', 'velho_mas.png')
            }


        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianca_fem.png')
            } else if (idade < 23){
                img.setAttribute('src', 'jovem_fem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulta_fem.png')
            } else {
                img.setAttribute('src', 'velha_fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(document.createElement('br'))
        res.appendChild(img)
    }
}