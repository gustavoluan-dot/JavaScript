function check() {
    let num = document.getElementById('txtn1')
    let tab = document.getElementById('txttab')

    if (num.value.length == 0) {
        alert('ERRO, COLOQUE UM NÚMERO')
    }
     else {
       let n = Number(num.value) 
       tab.innerHTML = ''
       for (let c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        tab.appendChild(item)
       }
    }
}

function clean() {
    let num = document.getElementById('txtn1').value = ''  
    let tab = document.getElementById('txttab').innerHTML = ''
}