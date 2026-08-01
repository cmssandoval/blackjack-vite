import { crearDeck } from "./CrearDeck";

/**
 * Función para inicializar el juego
 * @param {Array<HTMLElement>} elementosHTML arreglo de elementos visuales HTML
 * @param {Array} dataState arreglo con datos del juego compartidos entre componentes
 * @returns {Object} retorna un objeto con los datos formateados de dataState
 */
export const inicializarJuego = ( elementosHTML, dataState ) => {

    console.clear();

    const { btnPedirCarta, btnDetenerJuego, divCartasJugadores, spanPuntosJugadores } = elementosHTML;
    let { cantidadJugadores, puntosJugadores, deck, puntosMinimos } = dataState;

    deck = crearDeck();    
    
    puntosJugadores = [];
    for (let i = 0; i < cantidadJugadores; i++) {
        puntosJugadores.push(0);
    }

    spanPuntosJugadores.forEach(ele => ele.innerText = 0);
    divCartasJugadores.forEach(ele => ele.innerHTML = '');

    btnPedirCarta.disabled = false;
    btnDetenerJuego.disabled = false;

    return { cantidadJugadores, puntosJugadores, deck, puntosMinimos }
};