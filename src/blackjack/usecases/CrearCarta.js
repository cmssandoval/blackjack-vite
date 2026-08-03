/**
 * Función para generar la imagen de una carta pedida
 * @param {String} carta nombre de la carta
 * @param {Number} turno turno del jugador
 * @param {HTMLElement} divCartasJugadores elemento HTML para apilar las cartas
 * @returns {HTMLImageElement} imagen de la carta creada
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    if ( !carta ) throw new Error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `${import.meta.env.BASE_URL}cartas/${carta}.png`;
    
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
};