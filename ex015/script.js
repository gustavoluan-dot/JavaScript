function check () {

    var data = new Date()
    var ano = data.getFullYear()

    var anoEscolhido = document.getElementById('txtano')
    var msg = document.getElementById('res')
 
    if (anoEscolhido.value.length == 0 || Number(anoEscolhido.value) >= ano) {
        alert('ERRO')

    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(anoEscolhido.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        

        if (sexo [0].checked) {
            genero = 'masculino'

            if (idade >= 0 && idade < 5) {

                msg.innerHTML = `<p><strong>Detectamos um bebê do sexo ${genero} com ${idade} ano de idade</strong></p>`
                msg.style.textAlign = 'center'
                img.setAttribute('src', 'bebeM.jpg')


            } else if (idade >= 5 && idade < 10) {

                msg.innerHTML = `<p><strong>Detectamos uma criança do sexo ${genero} com ${idade} anos de idade</strong></p>`
                msg.style.textAlign = 'center'
                img.setAttribute('src', 'criancaM.jpg')

            } else if (idade >= 10 && idade < 20) {

                msg.innerHTML = `<p><strong>Detectamos um jovem do sexo ${genero} com ${idade} anos de idade</strong></p>`
                msg.style.textAlign = 'center'
                img.setAttribute ('src', 'jovemM.jpg')

            } else if (idade >= 20 && idade < 50) {

                msg.innerHTML = `<p><strong>Detectamos um adulto do sexo ${genero} com ${idade} anos de idade</strong></p>`
                msg.style.textAlign = 'center'
                img.setAttribute  ('src', 'adultoM.jpg')

            } else {
                msg.innerHTML = `<p><strong>Detectamos um idoso do sexo ${genero} com ${idade} anos de idade</strong></p>`
                msg.style.textAlign = 'center'
                img.setAttribute ('src', 'idosoM.jpg')

               

           
            } 
        }   if (sexo[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 5) {

                msg.innerHTML = `<p><strong>Detectamos um bebê do sexo ${genero} com ${idade} ano de idade</strong></p>`
                msg.style.textAlign = 'center'
                img.setAttribute('src', 'bebeF.jpg')

            } else if (idade >= 5 && idade < 10) {

                msg.innerHTML = `<p><strong>Detectamos uma criança do sexo ${genero} com ${idade} anos de idade</strong></p>`
                msg.style.textAlign = 'center'
                img.setAttribute('src', 'criancaF.jpg')

            } else if (idade < 21) {

                msg.innerHTML = `<p><strong>Detectamos uma jovem do sexo ${genero} com ${idade} anos de idade</strong></p>`
                msg.style.textAlign = 'center'
                img.setAttribute('src', 'jovemF.jpg')

            } else if (idade >= 21 && idade < 50) {

                msg.innerHTML = `<p><strong>Detectamos um adulto do sexo ${genero} com ${idade} anos de idade</strong></p>`
                msg.style.textAlign = 'center'
                img.setAttribute('src', 'adultoF.jpg')

            } else {

                msg.innerHTML = `<p><strong>Detectamos uma idosa do sexo com ${idade} anos de idade</strong></p>`
                msg.style.textAlign = 'center'
                img.setAttribute('src', 'idosaF.jpg')
            }
        }
               msg.appendChild(img)

    }
 
}

