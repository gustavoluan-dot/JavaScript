function check() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let msg = document.getElementById('msg')

   

    msg.style.textAlign = 'center'
    msg.style.fontWeight = 'bolder'

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        msg.innerHTML = 'PREENCHA TODOS OS CAMPOS PARA QUE POSSA SER FEITO O CÁLCULO!'
        return
    } else {
        msg.innerHTML = 'Contando: <br>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('INVÁLIDO, CONSIDERANDO ENTAO PASSO 1') 
            p = 1 
        }

        if (i <= f) {  // ordem crescente
            for (let c = i; c <= f; c += p) {
            msg.innerHTML += ` 👉 ${c} `
            }
        }
        
        if (i >= f) {  // ordem decrescente
            for (let c = i; c >=f; c-= p ) {
                msg.innerHTML += ` 👉 ${c} `
            }
        }
        
        msg.innerHTML += `\u{1F3C1}`
    }

  
}

function reset() {
    let inicio = document.getElementById('txti').value = ''
    let fim = document.getElementById('txtf').value = ''
    let passo = document.getElementById('txtp').value = ''
    let msg = document.getElementById('msg').innerHTML = ''
}