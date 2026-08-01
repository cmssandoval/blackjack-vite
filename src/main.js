import _ from 'underscore';
import './style.css';

/** Los nombres de las cartas están abreviados y en inglés:
 * 2C = Two of Clubs    (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts   (Corazones)
 * 2S = Two of Spades   (Picas)
*/

let deck = [];
const palos = ['C', 'D', 'H', 'S'],
  figuras = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

// Referencias a los elementos del DOM
// Botones
const btnNuevoJuego = document.querySelector('#btn-nuevo-juego'),
  btnPedirCarta = document.querySelector('#btn-pedir-carta'),
  btnDetenerJuego = document.querySelector('#btn-detener-juego');

// Divs de cartas y Spansd de puntos de los jugadores
const divCartasJugadores = document.querySelectorAll('.divCartas'),
  spanPuntosJugadores = document.querySelectorAll('span');

// Función para inicializar el juego
const inicializarJuego = (cantidadJugadores = 2) => {
  deck = crearDeck();

  puntosJugadores = [];
  for (let i = 0; i < cantidadJugadores; i++) {
    puntosJugadores.push(0);
  }

  spanPuntosJugadores.forEach(ele => ele.innerText = 0);
  divCartasJugadores.forEach(ele => ele.innerHTML = '');

  btnPedirCarta.disabled = false;
  btnDetenerJuego.disabled = false;
};

// Función para crear y barajar el deck
const crearDeck = () => {

  deck = [];
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

// Función para pedir una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    alert('No hay cartas en el deck');
    throw ('No hay cartas en el deck');
  }
  return deck.pop();
};

// Función para determinar el valor de la carta
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return (isNaN(valor)) ?
    (valor === 'A') ? 11 : 10
    : Number(valor);
};

const acumularPuntos = (carta, turno) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  spanPuntosJugadores[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};

const crearCarta = (carta, turno) => {

  const imgCarta = document.createElement('img');
  imgCarta.src = `./assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugadores[turno].append(imgCarta);
};

const determinarGanador = () => {

  const [puntosMinimos, puntosComputadora] = puntosJugadores;

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Empate');
    } else if (puntosMinimos > 21) {
      alert('La computadora gana')
    } else if (puntosComputadora > 21) {
      alert('El jugador gana')
    } else {
      alert('La computadora gana')
    }
  }, 100);
};

// Función para ejecutar el turno de la computadora
const turnoComputadora = (puntosMinimos) => {

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta();
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
    crearCarta(carta, puntosJugadores.length - 1);

  } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

  determinarGanador();
};

// EVENTOS:
// Evento click para el botón Nuevo Juego
btnNuevoJuego.addEventListener('click', () => {

  inicializarJuego();

});

// Evento click para el botón Pedir Carta
btnPedirCarta.addEventListener('click', () => {

  const carta = pedirCarta();
  const puntosJugador = acumularPuntos(carta, 0);
  crearCarta(carta, 0);

  if (puntosJugador > 21) {
    btnPedirCarta.disabled = true;
    btnDetenerJuego.disabled = true;
    turnoComputadora(puntosJugador);

  } else if (puntosJugador === 21) {
    btnPedirCarta.disabled = true;
    btnDetenerJuego.disabled = true;
    turnoComputadora(puntosJugador);
  }
});

// Evento click para el botón Detener
btnDetenerJuego.addEventListener('click', () => {
  btnPedirCarta.disabled = true
  btnDetenerJuego.disabled = true
  turnoComputadora(puntosJugadores[0]);
});

inicializarJuego();