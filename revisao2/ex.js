function check() {
    let number = document.getElementById('p1')
    let table = document.getElementById('p2')

    if (number.value.length == 0) {
        alert('ERRO, DIGITE ALGUM NUMERO PARA QUE POSSA SER FEITO A TABUADA!')
    } else {
        let n = Number(number.value)
        table.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            table.appendChild(item)
        }
    }
}

function clean() {
     let number = document.getElementById('p1').value = ''
    let table = document.getElementById('p2').innerHTML =''
}