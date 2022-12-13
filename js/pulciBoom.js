function iniciarJuego() {
    let botonPulciJugador = document.getElementById('boton-pulci')
    botonPulciJugador.addEventListener('click', seleccionarPulciJugador)
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

window.addEventListener('load', iniciarJuego)