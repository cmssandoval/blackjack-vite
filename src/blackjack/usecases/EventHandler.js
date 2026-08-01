import { inicializarJuego, turnoJugador, turnoComputadora } from "./";

/**
 * Función principal que maneja los eventos del juego
 * @param {Array<HTMLElement>} elementosHTML arreglo de elementos visuales HTML
 */
export const eventHandler = ( elementosHTML ) => {

    const { btnNuevoJuego, btnPedirCarta, btnDetenerJuego, divCartasJugadores, spanPuntosJugadores } = elementosHTML;

    const cantidadJugadores = 2;
    const puntosJugadores = [];
    const deck = [];
    const puntosMinimos = 0;

    let dataState = { cantidadJugadores, puntosJugadores, deck, puntosMinimos }

    // EVENTOS:
    // Evento click para el botón Nuevo Juego
    btnNuevoJuego.addEventListener('click', () => {

        dataState = inicializarJuego( elementosHTML, dataState );

    });

    // Evento click para el botón Pedir Carta
    btnPedirCarta.addEventListener('click', () => {

        dataState = turnoJugador( elementosHTML, dataState );

    });

    // Evento click para el botón Detener
    btnDetenerJuego.addEventListener('click', () => {
        btnPedirCarta.disabled = true
        btnDetenerJuego.disabled = true
        dataState = turnoComputadora( elementosHTML, dataState );
    });

    dataState = inicializarJuego( elementosHTML, dataState );
};