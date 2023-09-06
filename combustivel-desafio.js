/* Crie um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para completar a viagem */



const precoGasolina = 5.79;
const precoEtanol = 3.55;

const kmLitroGasolina = 10;
const kmLitroEtanol = 8.5;

let distancia = 450;

let tipoCombustivel = 'etanol';

if (tipoCombustivel === 'gasolina') {
    valorGasto = distancia / kmLitroGasolina * precoGasolina
    console.log(valorGasto.toFixed(2))
} else {
    valorGasto = distancia / kmLitroEtanol * precoEtanol
    console.log(valorGasto.toFixed(2))
}


