let valores = [8, 1, 7, 4, 2, 9]

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)    //percurso de exibição do javascript
} */
console.log(`Nosso vetor tem ${valores.length} elementos`)
console.log(`Os elementos do nosso vetor são ${valores}`)

let pos = valores.indexOf(2)
console.log(`O valor 2 está na posição ${pos}`)
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    
}
