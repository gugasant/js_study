function aplicarDesconto(valor, desconto) {
    return valor - (valor * desconto / 100)
}

function aplicarJuros(valor, juros) {
    return valor + (valor * juros / 100)
}



let precoEtiqueta = 170;
let condPagamento = 2;

if (condPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10))
} else if (condPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15))
} else if (condPagamento === 3) {
    console.log(precoEtiqueta)
} else {
    console.log(aplicarJuros(precoEtiqueta, 10))
}



/* let precoEtiqueta = 170;
let condPagamento = 1;

if (condPagamento === 1) {
    console.log(`Preço final: ${precoEtiqueta - precoEtiqueta * 0.1} reais`)
} else if (condPagamento === 2) {
    console.log(`Preço final: ${precoEtiqueta - precoEtiqueta * 0.15} reais`)
} else if (condPagamento === 3) {
    console.log(`Preço final: ${precoEtiqueta} reais`)
} else {
    console.log(`Preço final: ${precoEtiqueta + precoEtiqueta * 0.1} reais`)
} */

