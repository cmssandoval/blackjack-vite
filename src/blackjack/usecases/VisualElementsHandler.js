/**
 * Manejador de elementos visuales HTML
 * @returns {Array<HTMLElement>} retorna un arreglo de elementos visuales HTML
 */
export const visualElementsHandler = () => {
    // Referencias a los elementos del DOM
    // Botones

    const btnNuevoJuego = document.querySelector('#btn-nuevo-juego'),
        btnPedirCarta = document.querySelector('#btn-pedir-carta'),
        btnDetenerJuego = document.querySelector('#btn-detener-juego');

    // Divs de cartas y Spans de puntos de los jugadores
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        spanPuntosJugadores = document.querySelectorAll('span');

    const elementosHTML = { btnNuevoJuego, btnPedirCarta, btnDetenerJuego, divCartasJugadores, spanPuntosJugadores };
    return elementosHTML;
};