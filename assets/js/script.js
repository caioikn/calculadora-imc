import { calculaIMCMetric, calculaIMCImperial } from './calculadoraIMC.js';
import { configurarRadioOpcoes } from './radioOpcoes.js';

const altura = document.querySelector('#height');
const peso = document.querySelector('#weight');

altura.addEventListener('blur', () => calculaIMCMetric(altura, peso));
peso.addEventListener('input', () => calculaIMCMetric(altura, peso));

const pe = document.getElementById('ft');
const polegada = document.getElementById('in');
const pedra = document.getElementById('st');
const libra = document.getElementById('lbs');

pe.addEventListener('blur', () => calculaIMCImperial(pe, polegada, pedra, libra));
polegada.addEventListener('blur', () => calculaIMCImperial(pe, polegada, pedra, libra));
pedra.addEventListener('input', () => calculaIMCImperial(pe, polegada, pedra, libra));
libra.addEventListener('input', () => calculaIMCImperial(pe, polegada, pedra, libra));

configurarRadioOpcoes();
