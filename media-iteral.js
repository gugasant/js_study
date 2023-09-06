const notas = [];

notas.push(8);
notas.push(6);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  let nota = notas[i];
  soma = nota + soma;
}

let media = soma / notas.length;

console.log(media)