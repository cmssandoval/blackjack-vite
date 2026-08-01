

/** 
 * Función para pedir una carta
 * @param {Array<String>} deck arreglo de strings que contiene a todo el deck
 * @returns {{carta: String, deck: Array<String>}} arreglo con la carta pedida y el deck actualizado
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        alert('No hay cartas en el deck');
        throw ('No hay cartas en el deck');
    }
    
    const carta = deck.pop()
    return { carta, deck };
};