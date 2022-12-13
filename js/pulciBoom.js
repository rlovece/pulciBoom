let ataqueJugador
let ataqueOponente

function iniciarJuego() {
    let botonPulciJugador = document.getElementById('boton-pulci')
    botonPulciJugador.addEventListener('click', seleccionarPulciJugador)

    let botonAtaque = document.getElementById ('combate')
    botonAtaque.addEventListener ('click', combate)
}

function entreroAleatorio (min, max){
    return Math.floor (Math.random()* (max-min+1)+1)
    
}

function seleccionarPulciJugador() {
    let inputNerd = document.getElementById('nerd')
    let inputCrazy = document.getElementById('crazy')
    let inputAngry = document.getElementById('angry')
    let spanPulciJugador = document.getElementById('pulci-jugador')
    
    if (inputNerd.checked) {
        spanPulciJugador.innerHTML = 'Nerd'
    } else if (inputCrazy.checked) {
        spanPulciJugador.innerHTML = 'Crazy'
    } else if (inputAngry.checked) {
        spanPulciJugador.innerHTML = 'Angry'
    } else {
        alert('Selecciona una Pulci 🐣')
    }

    seleccionarPulciOponente()
}

function seleccionarPulciOponente() {
    let oponente = entreroAleatorio(1,3)
    let spanPulciOponente = document.getElementById('pulci-oponente')

    if (oponente == 1) {
        spanPulciOponente.innerHTML = 'Nerd'
    } else if (oponente == 2) {
        spanPulciOponente.innerHTML = 'Crazy'
    } else {
        spanPulciOponente.innerHTML = 'Angry'
    }
}

function combate (){
    ataqueJugador = entreroAleatorio (1,3)
    ataqueOponente = entreroAleatorio (1,3)
    if (ataqueJugador == ataqueOponente) {
        mensajeAtaque ("Empate! 😬")
    } else if (ataqueJugador > ataqueOponente) {
        mensajeAtaque ("Ganaste! Bravooo 🥳")
    } else {
        mensajeAtaque ("Perdiste... Va de nuevo? 😌")
    }
}

function mensajeAtaque (resultado) {
    let seccionMensaje = document.getElementById ('mensajes')

    let parrafo = document.createElement ('p')
    parrafo.innerHTML = "Atacaste con fuerza " + ataqueJugador + " y tu oponente con " + ataqueOponente + ' - ' + resultado
    
    seccionMensaje.appendChild(parrafo)
}

window.addEventListener('load', iniciarJuego)