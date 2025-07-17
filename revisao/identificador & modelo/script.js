

function check() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoEscolhido = document.getElementById('number')
    var msg = document.getElementById('msg')

    if (anoEscolhido.value.length == 0 || Number(anoEscolhido.value) >= ano) {
        alert('ERRO!')

    } else {
       var sexo = document.getElementsByName('sexo')
       var etnia = document.getElementsByName('cor')
       var idade = ano - Number(anoEscolhido.value)
       var img = document.createElement('img')
       img.setAttribute('id', 'foto') 

       var genero = ''
       var etniaEscolhida = ''

       if(sexo[0].checked && etnia[0].checked) {
            genero = 'masculino'
            etniaEscolhida = 'negro'

            if (idade > 0 && idade <= 1 ) {

                msg.style.textAlign = 'center'
                msg.innerHTML  = `<p><strong>Detectamos um bebê ${etniaEscolhida} do sexo ${genero} com ${idade} ano de idade.</strong></p>`
                img.setAttribute('src', 'imagens/bebeM-negro.jpg')
             
               
            } 
            
            else if (idade > 1 && idade <= 3) {
                msg.style.textAlign = 'center'
                msg.innerHTML  = `<p><strong>Detectamos um bebê ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</strong></p>`
                img.setAttribute('src', 'imagens/bebeM-negro.jpg')
            }

            else if (idade > 3  && idade <= 5) {

            msg.style.textAlign = 'center'    
            msg.innerHTML = `<p><strong> Detectamos uma criança com o tom de pele ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
            img.setAttribute('src', 'imagens/criancaM-negra.jpg')
            

            }  else if (idade > 5 && idade < 10) {
            msg.style.textAlign = 'center'    
            msg.innerHTML = `<p><strong> Detectamos uma criança com o tom de pele ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
            img.setAttribute('src', 'imagens/crianca2M-negra.jpg')

            } else if (idade >= 10 && idade < 15) {

                msg.style.textAlign = 'center'    
                msg.innerHTML = `<p><strong> Detectamos um jovem ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
                img.setAttribute('src', 'imagens/jovemM-negro.jpg')

            } else if (idade >= 15 && idade <= 20) {
                msg.style.textAlign = 'center'    
                msg.innerHTML = `<p><strong> Detectamos um adolescente ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
                img.setAttribute('src', 'imagens/adolescenteM-negro.jpg')

            }  else if (idade > 20 && idade <= 50) {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<p><strong> Detectamos um adulto ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
                img.setAttribute('src', 'imagens/adultoM-negro.jpg')

            } else {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<p><strong> Detectamos um senhor ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
                img.setAttribute('src', 'imagens/senhorM-negro.jpg')
            }

       } else if (sexo[0].checked && etnia[1].checked) {

            genero = 'masculino' 
            etniaEscolhida = 'pardo'

             if (idade > 0 && idade <= 1 ) {
                msg.style.textAlign = 'center'
                msg.innerHTML  = `<p><strong>Detectamos um bebê ${etniaEscolhida} do sexo ${genero} com ${idade} ano de idade.</strong></p>`
                img.setAttribute('src', 'imagens/bebeM-negro.jpg')

               
            } else if (idade > 1 && idade < 5) {

            msg.style.textAlign = 'center'    
            msg.innerHTML = `<p><strong> Detectamos um bebê ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
            img.setAttribute('src', 'imagens/bebeM-negro.jpg')


            }  else if (idade >= 5 && idade < 10) {
             msg.style.textAlign = 'center'    
             msg.innerHTML = `<p><strong> Detectamos uma criança do tom de pele ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
             img.setAttribute('src', 'imagens/crianca2M-negra.jpg')

            } else if (idade >= 10 && idade < 15) {

                msg.style.textAlign = 'center'    
                msg.innerHTML = `<p><strong> Detectamos um jovem ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade</p>.`
                img.setAttribute('src', 'imagens/jovemM-negro.jpg')

            } else if (idade >= 15 && idade < 20) {
                msg.style.textAlign = 'center'    
                msg.innerHTML = `<p><strong> Detectamos um adolescente ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
                img.setAttribute('src', 'imagens/adolescenteM-negro.jpg')

            }  else if (idade >= 20 && idade < 50) {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<p><strong> Detectamos um adulto ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
                img.setAttribute('src', 'imagens/adultoM-negro.jpg')


            } else {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<p><strong> Detectamos um senhor ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
                 img.setAttribute('src', 'imagens/senhorM-negro.jpg')
            }


       } else if (sexo[0].checked && etnia[2].checked) {
        
            etniaEscolhida = 'branco'
            genero = 'masculino'

             if (idade > 0 && idade <= 3 ) {
                msg.style.textAlign = 'center'
                msg.innerHTML  = `<p><strong>Detectamos um bebê ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</strong></p>`
                img.setAttribute('src', 'imagens/bebeM-branco.jpg')
               
            } else if (idade >= 4 && idade < 5) {

            msg.style.textAlign = 'center'    
            msg.innerHTML = `<p><strong> Detectamos uma ciança com o tom de pele ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
            img.setAttribute('src', 'imagens/criancaM-branco.jpg')

            }  else if (idade >= 5 && idade < 10) {
             msg.style.textAlign = 'center'    
            msg.innerHTML = `<p><strong> Detectamos uma criança com o tom de pele ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</p>`
            img.setAttribute('src', 'imagens/criancaM.jpg')

            } else if (idade >= 10 && idade < 15) {

                msg.style.textAlign = 'center'    
                msg.innerHTML = `<p><strong> Detectamos um jovem ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/jovemM-branco.jpg')

            } else if (idade >= 15 && idade <= 20) {

                msg.style.textAlign = 'center'    
                msg.innerHTML = `<p><strong> Detectamos um adolescente ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/jovemM.jpg')

            }  else if (idade > 20 && idade < 50) {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<p><strong> Detectamos um adulto ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/adultoM-branco.jpg')

            } else {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<P><strong> Detectamos um senhor ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/senhorM-branco.jpg')
            }

       }
       if (sexo[1].checked && etnia [0].checked) {

            genero = 'feminino'
            etniaEscolhida = 'negra' 

             if (idade > 0 && idade <= 1 ) {

                msg.style.textAlign = 'center'
                msg.innerHTML  = `<p><strong>Detectamos uma bebê  ${etniaEscolhida} do sexo ${genero} com ${idade} ano de idade.</strong>`
                img.setAttribute('src', 'imagens/bebeF-negra.jpg')
               
            } 
            
            else if (idade > 1 && idade <= 5) {
                msg.style.textAlign = 'center'
                msg.innerHTML  = `<p><strong>Detectamos uma criança ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</strong>`
                img.setAttribute('src', 'imagens/bebe2F-negra.jpg')
            }

            else if (idade >= 6 && idade < 10) {

            msg.style.textAlign = 'center'    
            msg.innerHTML = `<p><strong> Detectamos uma criança ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
            img.setAttribute('src', 'imagens/jovemF-negra.jpg')    

            }  else if (idade >= 7 && idade <= 10) {
            msg.style.textAlign = 'center'    
            msg.innerHTML = `<P><strong> Detectamos uma criança  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
            img.setAttribute('src', 'imagens/jovemF-negra.jpg')  

            } else if (idade > 10 && idade < 15) {

                msg.style.textAlign = 'center'    
                msg.innerHTML = `<P><strong> Detectamos uma jovem  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/jovemF-negra.jpg')  


            } else if (idade >= 15 && idade <= 20) {
                msg.style.textAlign = 'center'    
                msg.innerHTML = `<p><strong> Detectamos uma adolescente  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/adolescenteF-negra.jpg')

            }  else if (idade > 20 && idade < 50) {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<p><strong> Detectamos uma adulta  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/adultaF-negra.jpg')

            } else {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<p><strong> Detectamos uma senhora ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/idosaF-negra.jpg')
            }

       } else if (sexo[1].checked && etnia [1].checked) {

        genero = 'feminino'
        etniaEscolhida = 'parda'

        if (idade > 0 && idade <= 1 ) {
                msg.style.textAlign = 'center'
                msg.innerHTML  = `<strong>Detectamos uma bebê  ${etniaEscolhida} do sexo ${genero} com ${idade} ano de idade.</strong>`
                img.setAttribute('src', 'imagens/bebeF-negra.jpg')

               
            } else if (idade > 1 && idade < 5) {

            msg.style.textAlign = 'center'    
            msg.innerHTML = `<p><strong> Detectamos uma criança ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
            img.setAttribute('src', 'imagens/bebe2F-negra.jpg')

            }  else if (idade >= 5 && idade < 10) {
            msg.style.textAlign = 'center'    
            msg.innerHTML = `<p><strong> Detectamos uma criança  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
            img.setAttribute('src', 'imagens/jovemF-negra.jpg')

            } else if (idade >= 10 && idade < 15) {

                msg.style.textAlign = 'center'    
                msg.innerHTML = `<P><strong> Detectamos uma jovem  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/jovemF-negra.jpg')

            } else if (idade >= 15 && idade <= 20) {
                msg.style.textAlign = 'center'    
                msg.innerHTML = `<p><strong> Detectamos uma adolescente  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/adolescenteF-negra.jpg')

            }  else if (idade > 20 && idade < 50) {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<p><strong> Detectamos uma adulta  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/adultaF-negra.jpg')

            } else {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<p><strong> Detectamos uma senhora ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/idosaF-negra.jpg')
            }



       } else if (sexo[1].checked && etnia [2].checked) {

            genero = 'feminino'
            etniaEscolhida = 'branca'

            
        if (idade > 0 && idade <= 3) {
                msg.style.textAlign = 'center'
                msg.innerHTML  = `<P><strong>Detectamos uma bebê  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.</strong>`
                img.setAttribute('src', 'imagens/bebeF-branca.jpg')
             
               
            } else if (idade > 3 && idade <= 6) {

            msg.style.textAlign = 'center'    
            msg.innerHTML = `<p><strong> Detectamos uma criança ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
            img.setAttribute('src', 'imagens/bebe2f-branca.jpg')


            }  else if (idade >= 7 && idade < 10) {
            msg.style.textAlign = 'center'    
            msg.innerHTML = `<p><strong> Detectamos uma criança  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
            img.setAttribute('src', 'imagens/criancaF-branca.jpg')

            } else if (idade >= 10 && idade < 15) {

                msg.style.textAlign = 'center'    
                msg.innerHTML = `<p><strong> Detectamos uma jovem  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/jovemF-branca.jpg')

            } else if (idade >= 15 && idade < 20) {
                msg.style.textAlign = 'center'    
                msg.innerHTML = `<p><strong> Detectamos uma adolescente  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/adolescenteF-branca.jpg')

            }  else if (idade >= 20 && idade < 50) {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<P><strong> Detectamos uma adulta  ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/adultaF-branca.jpg')

            } else {
                msg.style.textAlign = 'center'
                msg.innerHTML = `<p><strong> Detectamos uma senhora ${etniaEscolhida} do sexo ${genero} com ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/idosaF-branca.jpg')
            }


       }

         msg.appendChild(img)
        
    }

   
}
function resetForm() {
    document.getElementById('number').value = ''; // Limpa o campo de ano
    
    // Desmarca todos os radio buttons de sexo
    var sexoRadios = document.getElementsByName('sexo');
    for (var i = 0; i < sexoRadios.length; i++) {
        sexoRadios[i].checked = false;
    }

    // Desmarca todos os radio buttons de etnia
    var etniaRadios = document.getElementsByName('cor');
    for (var i = 0; i < etniaRadios.length; i++) {
        etniaRadios[i].checked = false;
    }

    // Limpa a mensagem e remove a imagem
    var msg = document.getElementById('msg');
    msg.innerHTML = 'A resposta aparece aqui ';
    // Se a imagem já foi adicionada, remova-a
    var foto = document.getElementById('foto');
    if (foto) {
        foto.remove();
    }
}