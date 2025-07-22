function check() {
    var date = new Date()
    var year = date.getFullYear()
    var yearChosed = document.getElementById('number')
    var age = year - Number(yearChosed.value)
    var msg = document.getElementById('msg')   
    var sexo = document.getElementsByName('sexo')
    var gender = ''  
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (yearChosed.value.length == 0 || Number(yearChosed.value) >= year) {
        alert('ERROR!')
    } if (sexo[0].checked) {
        gender = 'Men'
        if (age <= 1) {
            //bebe
            img.setAttribute ('src', 'bebeM.jpg')
        } else if (age <= 10) {
            //crianca
            img.setAttribute('src', 'criancaM.jpg')
        } else if (age <= 20) {
            //jovem
            img.setAttribute('src', 'jovemM.jpg')
        } else if (age <= 50) {
            //adulto
            img.src = 'adultoM.jpg'
        } else {
            //senhor
            img.setAttribute('src', 'idosoM.jpg')
        }
    } else if (sexo[1].checked) {
        gender = 'Woman'
         if (age <= 1) {
            //bebe
            img.src = 'bebeF.jpg'
        } else if (age <= 10) {
            //crianca
            img.src = 'criancaF.jpg'
        } else if (age <= 20) {
            //jovem
            img.src = 'jovemF.jpg'
        } else if (age <= 50) {
            //adulto
            img.src = 'adultoF.jpg'
        } else {
            //senhor
            img.src = 'idosaF.jpg'
        }
    }
    msg.innerHTML = `<strong>
        <p>Detected ${gender} with year ${age}.</p>
    </strong>`
    msg.style.textAlign = 'center'
    msg.appendChild(img)
}