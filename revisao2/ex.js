function check() {
    let inicio = document.getElementById('txtn')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let msg = document.getElementById('msg')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('PREENCHA TODOS OS CAMPOS PARA QUE POSSA SER FEITO O CÁLCULO')
    } else {
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
     
        if (p <= 0) {
            alert('INVÁLIDO, CONSIDERANDO PASSO 1')
            p = 1
        }

      if (i <= f) {
        msg.innerHTML = 'Contando: <br>'
        for (let s = i; s <= f; s += p) {
            msg.innerHTML += ` ${s} `
        }
      }

      else if (i >= f) {
        msg.innerHTML = 'Contando: <br>'
        for (let n = i; n >= f; n -= p) {
            msg.innerHTML +=  ` ${n} `
        }
      }
}

}

function reset() {
    let inicio = document.getElementById('txtn').value = ''
    let fim = document.getElementById('txtf').value = ''
    let passo = document.getElementById('txtp').value = ''
    let msg = document.getElementById('msg').innerHTML = ''
}