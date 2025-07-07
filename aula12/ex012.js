var agora = new Date()
var time = agora.getHours()
console.log(`Agora e extamente ${time} horas.`)
if (time > 0 && time < 6)
    console.log('Boa madrugada!')
else if (time >= 6 && time < 12) {
    console.log('Bom dia!')
} else if (time <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}