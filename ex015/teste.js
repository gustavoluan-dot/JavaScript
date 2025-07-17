function check() {
    var date = new Date()
    var year = date.getFullYear()
    var yearChosed = document.getElementById('txtano')
    var msg = document.getElementById('msg')

    if (yearChosed.value.length == 0 || Number(yearChosed.value) >= year) {
        alert('ERRO!')
    } else {
       var sex = document.getElementsByName('txtsexo')
       var gender = ''
       var age = year - Number(yearChosed.value)
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
     

       if (sex[0].checked) {
            gender = 'Homem'

            if (age > 0 && age <= 1) {
               //bebe 1 ano
               img.setAttribute('src', 'bebeM.jpg')
            } else if (age > 2 && age <= 10) {
               img.setAttribute('src', 'criancaM.jpg')
            } else if (age > 10 && age < 20) {
              img.setAttribute('src', 'jovemM.jpg')
            } else if (age >= 20 && age <= 50) {
                img.setAttribute('src', 'adultoM.jpg')
            } else {
                img.setAttribute('src', 'idosoM.jpg')
            }
       }
       else if (sex[1].checked) {
        gender = 'Mulher'
            if (age > 0 && age <= 1) {
               //bebe 1 ano
               img.setAttribute('src', 'bebeF.jpg')
            } else if (age > 2 && age <= 10) {
                //crianca
                img.setAttribute('src', 'criancaF.jpg')
            } else if (age > 10 && age < 20) {
               //jovem
               img.setAttribute('src', 'jovemF.jpg')
            } else if (age >= 20 && age <= 50) {
                //adulto
                img.setAttribute('src', 'adultoF.jpg')
            } else {
                //senhor
                img.setAttribute('src', 'idosaF.jpg')
            }
       }
       
     
       msg.style.textAlign = 'center'
       msg.innerHTML = `<p>Detectamos <strong>${gender}</strong> com idade <strong>${age}</strong>.</p>`
       msg.appendChild(img)
      
    }  
}