const nome = document.getElementById('nome'); 
const estado = document.getElementById('estado');
const gifouImg = document.querySelector('#imagem'); 
let botao = document.querySelector('.mudar'); 

botao.addEventListener('click', () =>{

    if(botao.value == 'um'){
        nome.innerText = "Esposa"
        estado.textContent = "Surtada"
        gifouImg.src = "./assets/imagens/RochelleSurtada.gif"

         botao.value = 'dois'

    } else if(botao.value == 'dois') { 
        nome.innerText = "Modelo"
        estado.innerText = "Soberba"
        gifouImg.src = "./assets/imagens/modeloRochelle.gif"          
         botao.value = "três" 

    } else if (botao.value == "três") { 
        nome.innerText = "Cozinheira"
        estado.innerText = "Estressada"
        gifouImg.src = "./assets/imagens/DonadecasaRoche.gif"
         botao.value = "quatro" 

    } else if (botao.value == "quatro"){
        nome.innerText = "Motorista"
        estado.innerText = "Veloz e Furiosa"
        gifouImg.src = "./assets/imagens/RocheleDirigindo.jpg"
         botao.value = "cinco"

    } else if (botao.value == "cinco") {
        nome.innerText = "Irmâ Rô"
        estado.innerText = "Competitiva"
        gifouImg.src = "./assets/imagens/IrmaRochelle.gif"
        botao.value = "seis"
    } else {
        nome.innerText = "Mãe"
        estado.innerText = "Pistola"
        gifouImg.src = "./assets/imagens/Rochelle.gif"
        botao.value = 'um'

    }
}) 