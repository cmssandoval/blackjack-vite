import { crearDeck } from './usecases/CrearDeck.js';


export const inicializarJuego = (cantidadJugadores = 2) => {
  deck = crearDeck( palos, figuras );

  puntosJugadores = [];
  for (let i = 0; i < cantidadJugadores; i++) {
    puntosJugadores.push(0);
  }

  spanPuntosJugadores.forEach(ele => ele.innerText = 0);
  divCartasJugadores.forEach(ele => ele.innerHTML = '');

  btnPedirCarta.disabled = false;
  btnDetenerJuego.disabled = false;
};