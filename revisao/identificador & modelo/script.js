function check() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoEscolhido = document.getElementById('number')
    var msg = document.getElementById('msg')
    
   if (anoEscolhido.value.length == 0 || Number(anoEscolhido.value) >= ano) {
    alert('ERRO!!!')
}  else {
    var sexo = document.getElementsByName('sexo')
    var idade = ano - Number(anoEscolhido.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (sexo[0].checked) {

        genero = 'masculino'
        
        if (idade >= 0 && idade < 4) {
            msg.innerHTML = `<p><strong>Detectamos um bebê do sexo ${genero} com ${idade} anos de idade</strong></p>`
            img.setAttribute('src', 'imagens/bebeM.jpg')
        } else if (idade < 12) {
            msg.innerHTML = `<P> <strong> Detectamos uma criança do sexo ${genero} com ${idade} anos de idade. `
            img.setAttribute('src', 'imagens/criancaM.jpg')
        } else if (idade < 23) {
            msg.innerHTML = `<P> <strong> Detectamos um jovem do sexo ${genero} com ${idade} anos de 
            idade. `
            img.setAttribute('src', 'imagens/jovemM.jpg')
        } else if (idade < 50) {
            msg.innerHTML = `<p> <strong>Detectamos um adulto do sexo ${genero} com ${idade}`
            img.setAttribute('src', 'imagens/adultoM.jpg')
        } else {
            msg.innerHTML = `<p> <strong> Detectamos um idoso com ${idade} anos de idade`
            img.setAttribute('src', 'imagens/idosoM.jpg')
        }

    } else if (sexo[1].checked) {

        genero = 'feminino'

         if (idade >= 0 && idade < 4) {
            msg.innerHTML = `<p><strong>Detectamos um bebê do sexo ${genero} com ${idade} anos de idade</strong></p>`
            img.setAttribute('src', 'imagens/bebeF.jpg')
        } else if (idade < 12) {
            msg.innerHTML = `<P> <strong> Detectamos uma criança do sexo ${genero} com ${idade} anos de idade. `
            img.setAttribute('src', 'imagens/criancaF.jpg')
        } else if (idade < 23) {
            msg.innerHTML = `<P> <strong> Detectamos uma jovem do sexo ${genero} com ${idade} anos de 
            idade. `
            img.setAttribute('src', 'imagens/jovemF.jpg')
        } else if (idade < 50) {
            msg.innerHTML = `<p> <strong>Detectamos um adulto do sexo ${genero} com ${idade}`
            img.setAttribute('src', 'imagens/adultoF.jpg')
        } else {
            msg.innerHTML = `<p> <strong> Detectamos uma idosa com ${idade} anos de idade`
            img.setAttribute('src', 'imagens/idosaF.jpg')
        }
        
    }

    msg.appendChild(img)
} 
}