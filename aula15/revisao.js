let numeros = [ 6 , 8 , 9] 
numeros[3] = 2
numeros.push(3)
numeros.sort()


console.log(`O meu vetor tem ${numeros.length} elementos.`)
console.log(`Os elementos do meu vetor são: ${numeros}`)

let pos = numeros.indexOf(8)


for (let vet in numeros) {
    console.log(`Posição ${vet} com seu elemento: ${numeros[vet]}`)
}

if (pos == -1) {
    console.log('Este elemento nao existe dentro dessse ARRAY')
} else [
    console.log(`O número 8 está na posição ${pos}`)
]

