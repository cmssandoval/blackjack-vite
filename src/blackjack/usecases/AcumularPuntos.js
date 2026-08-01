import { valorCarta } from "./";

/**
 * Función para acumular puntos para cada jugador según se pidan cartas del deck
 * @param {String} carta string con el valor de la carta
 * @param {Number} turno valor del turno. 0 = Jugador; 1 = Computadora 
 * @param {Array<Number>} puntosJugadores arreglo con puntos de los jugadores
 * @param {HTMLElement} spanPuntosJugadores elemento HTML que muestra los puntos de cada jugador
 * @returns {Array<Number>} arreglo con puntos acumulados de los jugadores
 */
export const acumularPuntos = (carta, turno, puntosJugadores, spanPuntosJugadores) => {

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    spanPuntosJugadores[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
};