function carregar() {
        var msg = document.getElementById('msg')
        var img = document.getElementById('imagem')
        var data = new Date
        var hora = data.getHours()
        
        msg.innerHTML = `Agora são ${hora} horas.`

        if (hora >= 6 && hora < 12 ) {

            img.src = 'imagens/manha.jpg'
            document.body.style.background = '#F8D4A6'
            

        } else if (hora >= 12 && hora < 18) {
            //boa tarde
            img.src = 'imagens/tarde.jpg'
            document.body.style.background = '#9ECAF3'
        } else if (hora >= 18 || hora < 0){
            //boa noite
            img.src = 'imagens/noite.jpg'
            document.body.style.background = '#041322'
          
        }

        else {
            img.src = 'imagens/madrugada.png'
            document.body.style.background = '#151335'
            //boa madrugada
        }
}
