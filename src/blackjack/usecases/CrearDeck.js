import _ from 'underscore';

/**
 *  Función para crear y barajar el deck
 * @param {Array<String>} palos Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} figuras Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas barajado en forma de arreglo de strings
 */
export const crearDeck = () => {

    const palos = ['C', 'D', 'H', 'S'],
        figuras = ['A', 'J', 'Q', 'K'];
        
    if ( !palos || palos.length === 0 ) throw new Error('palos es obligatorio como un arreglo de string');

    if ( !figuras || figuras.length === 0 ) throw new Error('figuras es obligatorio como un arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let palo of palos) {
            deck.push(i + palo)
        }
    }

    for (let palo of palos) {
        for (let figura of figuras) {
            deck.push(figura + palo);
        }
    }
    return _.shuffle(deck);
};