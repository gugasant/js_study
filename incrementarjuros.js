function incrementoJuros(valor, percentualJuros) {
    const valorAcrecimo = percentualJuros / 100 * valor
    return valor + valorAcrecimo
}

console.log(incrementoJuros(170, 10))