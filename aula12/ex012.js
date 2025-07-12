var now = new Date
var nowatt =  now.getHours()

if (nowatt > 6 && nowatt < 12) {
    console.log('Bom Dia!')
} else if (nowatt >= 12 && nowatt < 18) {
    console.log('Boa Tarde!')
} else if (nowatt >= 18 || nowatt < 0) {
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada!')
}

