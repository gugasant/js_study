
function calculoImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Você está abaixo do peso!'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Você está no peso normal, parabéns!'
    } else if (imc >= 25 && imc < 30) {
        return 'Você está acima do peso!'
    } else if (imc >= 30 && imc < 40) {
        return 'Você está obeso!'
    } else {
        return 'Obesidade grave!'
    }
}

// Main
(function () {
    let peso = 60;
    let altura = 1.80;

    const imc = calculoImc(peso, altura);
    console.log('IMC: ' + calculoImc(peso, altura));
    console.log(classificarImc(imc));
})();



