/*function soma(a, b){
    return a + b
}*/

/*var soma = function(a, b){
    return a + b
}*/

// var quadrado = a=>a**2

/*
let idade = 5
let situacao = (idade > 18) ?
    () => console.log('ADULTO') :
    () => console.log('MENOR')

situacao()

let salario = 1000
let faixa = (salario >= 1000) ?
    () => console.log('APTO') :
    () => console.log('NÃO APTO')

faixa() */

const calculadora = (operador,[n1,n2]=[10,5]) => 'Resultado: ' + eval(`${n1}${operador}${n2}`)

console.log(calculadora('/'))


