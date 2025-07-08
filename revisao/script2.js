var time = new Date()
var timenow = time.getHours()
var d = document.getElementById('msg')

var morning = document.getElementById('manha')
var afternoon = document.getElementById('tarde')
var evening = document.getElementById('noite')
var dawn = document.getElementById('madrugada')

function check() {
    d.innerHTML = `<p> Agora é: ${timenow} <strong>`
    if (timenow >= 6 && timenow < 12) {
        d.innerHTML += '<p> <strong>Agora e de manha!'
        morning.style.display = 'block'
        afternoon.style.display = 'none'
        evening.style.display = 'none'
        dawn.style.display = 'none'

    } else if ( timenow >= 12 && timenow < 18) {
        d.innerHTML += '<p> <strong> Agora e de tarde!'
        morning.style.display = 'none'
        afternoon.style.display = 'block'
        evening.style.display = 'none'
        dawn.style.display = 'none'
    } else if (timenow >= 18 || timenow < 0 ) {
        d.innerHTML += '<p> <strong> Agora e de noite!'
        morning.style.display = 'none'
        afternoon.style.display = 'none'
        evening.style.display = 'block'
        dawn.style.display = 'none'
    } else {
        d.innerHTML += '<p> <strong> Agora e de madrugada!'
        morning.style.display = 'none'
        afternoon.style.display = 'none'
        evening.style.display = 'none'
        dawn.style.display = 'block'
    }
}
