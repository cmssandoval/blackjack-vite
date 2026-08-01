import { acumularPuntos, crearCarta, pedirCarta, turnoComputadora } from "./";

/**
 * Función para ejecutar el turno del jugador
 * @param {Array<HTMLElement>} elementosHTML arreglo de elementos visuales HTML
 * @param {Array} dataState arreglo con datos del juego compartidos entre componentes
 * @returns {Object} retorna un objeto con los datos actualizados de dataState
 */
export const turnoJugador = ( elementosHTML, dataState ) => {

    const   { btnPedirCarta, btnDetenerJuego, divCartasJugadores, spanPuntosJugadores } = elementosHTML;
    let     { cantidadJugadores, puntosJugadores, deck, puntosMinimos } = dataState;
    
    const operarDeck = pedirCarta(deck);
    const carta = operarDeck.carta;
    deck = operarDeck.deck;

    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, spanPuntosJugadores);
    puntosJugadores[0] = puntosJugador;
    puntosMinimos = puntosJugador;
    crearCarta(carta, 0, divCartasJugadores);

    if (puntosJugador > 21) {
        btnPedirCarta.disabled = true;
        btnDetenerJuego.disabled = true;
        turnoComputadora( elementosHTML, dataState );

    } else if (puntosJugador === 21) {
        btnPedirCarta.disabled = true;
        btnDetenerJuego.disabled = true;
        turnoComputadora( elementosHTML, dataState );
    };

    return { cantidadJugadores, puntosJugadores, deck, puntosMinimos };
};