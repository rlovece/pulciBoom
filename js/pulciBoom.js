const seccionAtaque = document.getElementById ('ataque')
const seccionMensaje = document.getElementById ('mensajes') 
const botonPulciJugador = document.getElementById('boton-pulci')
const botonAtaque = document.getElementById ('combate')
const botonReiniciar = document.getElementById ('reiniciar')

const inputNerd = document.getElementById('nerd')
const inputCrazy = document.getElementById('crazy')
const inputAngry = document.getElementById('angry')
const spanPulciJugador = document.getElementById('pulci-jugador')

const seccionSeleccionarPulci = document.getElementById ('seleccionar-pulci')

const spanPulciOponente = document.getElementById('pulci-oponente')

const mensaje = document.getElementById ('mensajes')

const seccionMensajeAtaque = document.getElementById ('msj-ataque')

let ataqueJugador
let ataqueOponente
let vidaJugador = 10
let vidaOponente =10

function iniciarJuego() {
    
    seccionAtaque.style.display = 'none'
    seccionMensaje.style.display = 'none'

    botonPulciJugador.addEventListener('click', seleccionarPulciJugador)  
    botonAtaque.addEventListener ('click', combate)    
    botonReiniciar.addEventListener ('click', reiniciarJuego)
}

function entreroAleatorio (min, max){
    return Math.floor (Math.random()* (max-min+1)+1)
}

function seleccionarPulciJugador() {
    
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
    seccionSeleccionarPulci.style.display = 'none' 
    seccionAtaque.style.display = 'flex'
    seccionMensaje.style.display = 'flex'
    habilitarAtaque ()   
}

function habilitarAtaque () {
    botonAtaque.disabled = false
}

function seleccionarPulciOponente() {
    let oponente = entreroAleatorio(1,3)

    if (oponente == 1) {
        spanPulciOponente.innerHTML = 'Nerd'
    } else if (oponente == 2) {
        spanPulciOponente.innerHTML = 'Crazy'
    } else {
        spanPulciOponente.innerHTML = 'Angry'
    }
}

function combate (){
    spanVidaJugador = document.getElementById ('vida-jugador')
    spanVidaOponente = document.getElementById ('vida-oponente')

    
        ataqueJugador = entreroAleatorio (1,3)
        ataqueOponente = entreroAleatorio (1,3)
    
        if (ataqueJugador == ataqueOponente) {
            mensajeAtaque ("Empate! 😬")
        } else if (ataqueJugador > ataqueOponente) {
            mensajeAtaque ("Ganaste! Bravooo 🥳")
        } else {
            mensajeAtaque ("Perdiste... Va de nuevo? 😌")
        }
        vidaJugador -= ataqueOponente
        spanVidaJugador.innerHTML = mostrarVidas (vidaJugador)
        vidaOponente -= ataqueJugador
        spanVidaOponente.innerHTML = mostrarVidas (vidaOponente)


        if (vidaJugador<=0 || vidaOponente<=0){
            mensajeFinal ()
            mensajeReiniciar (1)
            let botonAtaque = document.getElementById ('combate')
            botonAtaque.disabled = true
        } else {
            mensajeReiniciar (0)
        }
}

function mostrarVidas (vida){
    if (vida==10)
    {
        return '♥♥♥♥♥♥♥♥♥♥'
    } else if (vida==9)
    {
        return '♥♥♥♥♥♥♥♥♥'
    } else if (vida==8)
    {
        return '♥♥♥♥♥♥♥♥'
    } else if (vida==7)
    {
        return '♥♥♥♥♥♥♥'
    } else if (vida==6)
    {
        return '♥♥♥♥♥♥'
    } else if (vida==5)
    {
        return '♥♥♥♥♥'
    } else if (vida==4)
    {
        return '♥♥♥♥'
    } else if (vida==3)
    {
        return '♥♥♥'
    } else if (vida==2)
    {
        return '♥♥'
    } else if (vida==1)
    {
        return '♥'
    } else
    {
        return '☠'
    } 
}

function mostrarAtaque (ataque){
    if (ataque==3)
    {
        return '💣💣💣'
    } else if (ataque==2)
    {
        return '💣💣'
    } else {
        return '💣'
    } 
}

function mensajeAtaque (resultado) {
    mensaje.innerHTML = resultado
}


function mensajeFinal () {

    if (vidaJugador<=0 && vidaOponente>0){
        seccionMensajeAtaque.innerHTML = "Lo siento... PERDISTE 😥"
    }
    else if (vidaJugador>0 && vidaOponente<=0){
        seccionMensajeAtaque.innerHTML = "Bravoooo.... Ganaste el partido!! 🤩"
    } else {
        seccionMensajeAtaque.innerHTML = "Ambos murieron ☠"
    }
}


function reiniciarJuego (){
    location.reload()
}

function mensajeReiniciar (fin) {
    spanMensajeReinciar = document.getElementById ('mensaje-reiniciar')
    spanMensajeReinciar2 = document.getElementById ('mensaje-reiniciar2')
    if (fin == 1) {
        spanMensajeReinciar.innerHTML = 'Atención📣 Buena batalla!'
        spanMensajeReinciar2.innerHTML = 'Pulsa has clic en reiniciar para volver a jugar!'
    }
    else{
        spanMensajeReinciar.innerHTML = 'Atención📣 Si no estás conforme con el combate puedes reiniciar.'
        spanMensajeReinciar2.innerHTML = 'Aunque no deberías rendirte 💪'
    }
}

window.addEventListener('load', iniciarJuego)