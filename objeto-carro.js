/* Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
Crie um método que, dada a quantidade de Kms e o preço do combustível, nos dê o valor gasto em reais para realizar o percurso. */

class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularGasto(distanciaKM, precoCombustivel) {
        return distanciaKM * this.gastoPorKm * precoCombustivel;
    }
}

const celtinha = new Carro('Chevrolet', 'preto', 1 / 10);

console.log(celtinha.calcularGasto(88, 5.69));

const palio = new Carro('Fiat', 'prata', 1 / 9)

console.log(palio.calcularGasto(88, 5.69))