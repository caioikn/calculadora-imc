import { toggleElementos } from './toggleElementos.js';

export function configurarRadioOpcoes() {
    const opcoes = document.querySelectorAll('input[type="radio"]');
    const opcaoMetrics = document.querySelectorAll('.formulario__info__campo-metric');
    const opcaoImperials = document.querySelectorAll('.formulario__info__campo-imperial');
    const containerMetric = document.querySelector('.formulario__info-metric');
    const containerImperial = document.querySelector('.formulario__info-imperial');
    
    opcoes.forEach(opcao => {
        opcao.addEventListener('click', event => {
            const displayMetric = event.target.id === 'imperial' ? 'none' : 'flex';
            const displayImperial = event.target.id === 'imperial' ? 'grid' : 'none';
    
            toggleElementos(opcaoMetrics, displayMetric);
            toggleElementos(opcaoImperials, displayImperial);
    
            containerMetric.style.display = displayMetric;
            containerImperial.style.display = displayImperial;
        });
    });
}
