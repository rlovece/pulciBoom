let ataqueJugador
let ataqueOponente
let vidaJugador = 10
let vidaOponente =10

function iniciarJuego() {
    let seccionAtaque = document.getElementById ('ataque')
    seccionAtaque.style.display = 'none'
    let seccionMensaje = document.getElementById ('mensajes')  
    seccionMensaje.style.display = 'none'

    let botonPulciJugador = document.getElementById('boton-pulci')
    botonPulciJugador.addEventListener('click', seleccionarPulciJugador)

    let botonAtaque = document.getElementById ('combate')
    botonAtaque.addEventListener ('click', combate)

    let botonReiniciar = document.getElementById ('reiniciar')
    botonReiniciar.addEventListener ('click', reiniciarJuego)
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
    
    let seccionSeleccionarPulci = document.getElementById ('seleccionar-pulci')
    seccionSeleccionarPulci.style.display = 'none'
   
    let seccionAtaque = document.getElementById ('ataque')
    seccionAtaque.style.display = 'flex'

    let seccionMensaje = document.getElementById ('mensajes')  
    seccionMensaje.style.display = 'flex'

    habilitarAtaque ()   
    
}

function habilitarAtaque () {
    let botonAtaque = document.getElementById ('combate')
    botonAtaque.disabled = false
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
    spanVidaJugador = document.getElementById ('vida-jugador')
    spanVidaOponente = document.getElementById ('vida-oponente')
    let spanAtaqueJugador = document.getElementById ('ataque-jugador')
    let spanAtaqueOponente = document.getElementById ('ataque-oponente')

    
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
    let mensaje = document.getElementById ('mensajes')

    mensaje.innerHTML = resultado

}


function mensajeFinal () {
    let seccionMensaje = document.getElementById ('msj-ataque')

    if (vidaJugador<=0 && vidaOponente>0){
        seccionMensaje.innerHTML = "Lo siento... PERDISTE 😥"
    }
    else if (vidaJugador>0 && vidaOponente<=0){
        seccionMensaje.innerHTML = "Bravoooo.... Ganaste el partido!! 🤩"
    } else {
        seccionMensaje.innerHTML = "Ambos murieron ☠"
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