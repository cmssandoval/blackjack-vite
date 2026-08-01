/**
 * Función para determinar y anunciar el ganador
 * @param {Array<Number>} puntosJugadores arreglo con puntos de los jugadores
 */
export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            console.warn('Empate')
            alert('Empate');
        } else if (puntosMinimos > 21) {
            console.warn('La computadora gana')
            alert('La computadora gana')
        } else if (puntosComputadora > 21) {
            console.warn('El jugador gana')
            alert('El jugador gana')
        } else {
            console.warn('La computadora gana')
            alert('La computadora gana')
        }
    }, 200);
};