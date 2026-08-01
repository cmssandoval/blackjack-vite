import _ from 'underscore';

// Función para crear y barajar el deck
export const crearDeck = ( palos, figuras) => {

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