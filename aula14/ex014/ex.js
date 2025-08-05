function check() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let msg = document.getElementById('msg')

    msg.style.textAlign = 'center'
    msg.style.fontWeight = 'bolder'

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       msg.innerHTML = 'PREENCHA TODOS OS CAMPOS'
       return

    } if (p <= 0) {
        alert('INVÁLIDO, CONSIDERANDO PASSO 1')
        p = 1
    } if (i <= f) {

        msg.innerHTML = 'Contando: <br>'
        for (let a = i; a <= f; a += p) {
            msg.innerHTML += `👉 ${a} `
        }
    } else if (i >= f) {

        msg.innerHTML = 'Contando: <br>'
        for (let a = i; a >= f; a -= p) {
            msg.innerHTML += `👉 ${a} `
        }
    }
}

function limparCampos() {
    document.getElementById('txti').value = ''
    document.getElementById('txtf').value = ''
    document.getElementById('txtp').value = ''
    document.getElementById('msg').innerHTML = ''
}
