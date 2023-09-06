/* O IMC - Índice de Massa Corporal é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que, dado o peso e altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

IMC em adultos - Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 24.9 Peso normal;
- Entre 25 e 29.9 Acima do peso;
- Entre 30 e 39.9 Obeso;
- Acima de 40 Obesidade grave;
*/

let peso = 60;
let altura = 1.80;

const imc = peso / Math.pow(altura, 2);
console.log('Seu IMC: ', imc.toFixed(2))

if (imc < 18.5) {
    console.log('Você está abaixo do peso!')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Você está no peso normal, parabéns!')
} else if (imc >= 25 && imc < 30) {
    console.log('Você está acima do peso!')
} else if (imc >= 30 && imc < 40) {
    console.log('Você está obeso!')
} else {
    console.log('Obesidade grave!')
}