var time = new Date()
var hour = time.getHours()
var d = document.getElementById('msg')


var morning = document.getElementById('manha')
var afternoon = document.getElementById('tarde')
var evening = document.getElementById('noite')
var dawn = document.getElementById('madrugada')

function check() {

 d.innerHTML = `Agora é: ${hour} horas. `
 
if (hour > 6 && hour < 12) {
    d.innerHTML += '<strong>Agora é de manha!'
    morning.style.display = 'block'
    afternoon.style.display = 'none'
    evening.style.display = 'none'
    
} else if (hour >= 12 && hour < 18) {
    d.innerHTML +=  '<strong>Agora é de tarde!'
    afternoon.style.display = 'block'
    evening.style.display = 'none'
    morning.style.display = 'none'
    
    
} else if (hour >= 18 || hour < 0) {
    d.innerHTML += '<strong>Noite!'
    evening.style.display = 'block'
    afternoon.style.display = 'none'
    morning.style.display = 'none'
}
    else {
        d.innerHTML += '<strong>Boa Madrugada!'
        evening.style.display = 'none'
        afternoon.style.display = 'none'
        morning.style.display = 'none'
        dawn.style.display = 'block'
    }
}
