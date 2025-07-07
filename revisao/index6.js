var time = new Date()
var timet = time.getHours()

if (timet > 6 && timet < 12) {
    console.log('Bom dia')
} else if (timet >= 12 && timet < 18) {
    console.log('Boa tarde')
} else if(timet >= 18 || timet < 0) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}