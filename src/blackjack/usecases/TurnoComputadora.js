import { acumularPuntos, pedirCarta, crearCarta, determinarGanador, valorCarta } from "./";

/**
 * Función para ejecutar el turno de la computadora
 * @param {Array<HTMLElement>} elementosHTML arreglo de elementos visuales HTML
 * @param {Array} dataState arreglo con datos del juego compartidos entre componentes
 * @returns {Object} retorna un objeto con los datos actualizados de dataState
 */
export const turnoComputadora = (elementosHTML, dataState) => {

    const { spanPuntosJugadores, divCartasJugadores } = elementosHTML;
    let { cantidadJugadores, deck, puntosJugadores, puntosMinimos } = dataState;

    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!deck) throw new Error('Deck es necesario');
    if (!puntosJugadores) throw new Error('Puntos de los jugadores son necesarios');
    if (!spanPuntosJugadores || !divCartasJugadores) throw new Error('Argumentos HTML spanPuntosJugadores y divCartasJugadores de los jugadores son necesarios');

    let puntosComputadora = 0;

    do {

        const operarDeck = pedirCarta(deck);
        const carta = operarDeck.carta;
        deck = operarDeck.deck;
        
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, spanPuntosJugadores);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
    return { cantidadJugadores, puntosJugadores, deck, puntosMinimos };
};