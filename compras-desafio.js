/* Elabore um algoritmo que calcule a quantia que deve ser paga por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código de condição de pagamento:
1 - À vista no débito = recebe 10% de desconto;
2 - À vista no dinheiro ou PIX = recebe 15% de desconto;
3 - Em 2 vezes = preço normal da etiqueta sem juros;
4 - Acima de 2 vezes = preço normal da etiqueta mais juros de 10%;
*/

let precoEtiqueta = 170;
let condPagamento = 1;

if (condPagamento === 1) {
    console.log(`Preço final: ${precoEtiqueta - precoEtiqueta * 0.1} reais`)
} else if (condPagamento === 2) {
    console.log(`Preço final: ${precoEtiqueta - precoEtiqueta * 0.15} reais`)
} else if (condPagamento === 3) {
    console.log(`Preço final: ${precoEtiqueta} reais`)
} else {
    console.log(`Preço final: ${precoEtiqueta + precoEtiqueta * 0.1} reais`)
}