function carregar() {
    var date = new Date()
    var hours = date.getHours()
    var msg = document.getElementById('msg')
    var msgimg = document.getElementById('msgimg')
    var header = document.getElementById('titulo')
    
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (hours >= 6 && hours < 12) {
     
       img.src = 'imagens/manha.jpg'
    } else if (hours >= 12 && hours < 18) {
        img.src = 'imagens/tarde.jpg'
       
    } else if (hours >= 18 || hours < 0) {
        img.setAttribute('src', 'imagens/noite.jpg')   
        document.body.style.background = 'black'
      
       
    } else {
        img.setAttribute('src', 'imagens/madrugada.png')
        document.body.style.background = `gray`
        
    }
   msg.innerHTML = `Agora são ${hours} horas.`
   msgimg.appendChild(img)
}