function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagens')
    var data = new Date
    var hora = data.getHours()
    if (hora >= 6 && hora < 12) {
        img.src = 'imagens/manha.jpg'
        msg.innerHTML += '<P> Bom Dia!'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        msg.innerHTML += '<p> Boa Tarde!'

    } else {
        msg.innerHTML += '<P> Boa Noite!'
        img.src = 'imagens/noite.jpg'
    } 
}
