function informaPeso(altura) {    
    const pesoIdeal = document.getElementById('peso-ideal');

    if (altura >= 1.52 && altura <= 1.56) {
        pesoIdeal.innerText = '44kgs - 58kgs';
    } else if (altura >= 1.57 && altura <= 1.61) {
        pesoIdeal.innerText = '47kgs - 61kgs';
    } else if (altura >= 1.62 && altura <= 1.67) {
        pesoIdeal.innerText = '50kgs - 65kgs';
    } else if (altura >= 1.68 && altura <= 1.72) {
        pesoIdeal.innerText = '54kgs - 69kgs';
    } else if (altura >= 1.73 && altura <= 1.77) {
        pesoIdeal.innerText = '57kgs - 74kgs';
    } else if (altura >= 1.78 && altura <= 1.82) {
        pesoIdeal.innerText = '60kgs - 78kgs';
    } else if (altura >= 1.83 && altura <= 1.87) {
        pesoIdeal.innerText = '64kgs - 83kgs';
    } else if (altura >= 1.88 && altura <= 1.92) {
        pesoIdeal.innerText = '67kgs - 87kgs';
    } else if (altura >= 1.93) {
        pesoIdeal.innerText = '71kgs - 89kgs';
    }
}

function informaIMC(imc) {  
    const imcCampo = document.getElementById('imc');
    const imcTexto = document.getElementById('imc-texto');

    if (isNaN(imc) || imc === Infinity) {
        imcCampo.innerText = '0.0';
    } else {
        imcCampo.innerText = imc.toFixed(1);
    }

    if (imc < 18.5) {
        imcTexto.innerText = 'Underweight';
    } else if (imc <= 24.9) {
        imcTexto.innerText = 'Healthy Weight';
    } else if (imc <= 29.9) {
        imcTexto.innerText = 'Overweight';
    } else {
        imcTexto.innerText = 'Obesity';
    }
}

function mostrarResultado() {
    const apresentacao = document.getElementById('apresentacao');
    const resultado = document.getElementById('resultado');

    resultado.style.display = 'flex';
    apresentacao.style.display = 'none';    
}

export function calculaIMCMetric(altura, peso) {    
    const alturaConvertida = Number(altura.value) / 100 || 0;
    const pesoConvertido = Number(peso.value) || 0;

    const imc = pesoConvertido / (alturaConvertida * alturaConvertida);

    mostrarResultado();

    informaIMC(imc);
    informaPeso(alturaConvertida);
}

export function calculaIMCImperial(pe, polegada, pedra, libra) {
    const peConvertidoEmCm = Number(pe.value) * 30.48;
    const polegadaConvertidoEmCm = Number(polegada.value) * 2.54;

    const alturaImperial = (peConvertidoEmCm + polegadaConvertidoEmCm) / 100;

    const pedraConvertidaEmKg = Number(pedra.value) * 6.35029;
    const libraConvertidaEmKg = Number(libra.value) * 0.453592;

    const pesoImperial = pedraConvertidaEmKg + libraConvertidaEmKg;

    const imcImperial = Number(pesoImperial.toFixed(2)) / (alturaImperial * alturaImperial);
    
    mostrarResultado();
    
    informaIMC(imcImperial);
    informaPeso(alturaImperial);
}
