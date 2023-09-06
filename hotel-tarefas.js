// Programa de tarefas para quartos de um hotel
const prompt = require("prompt-sync")();

// Lista de tarefas
const tarefas = [];

//Repetição do menu com as opções de CRUD
let controle = true;
do {
  let menu = parseInt(
    prompt(
      console.log(
        `Digite 1 para criar uma nova tarefa | 2 para listar todas as tarefas | 3 para alterar uma tarefa | 4 para apagar uma tarefa `
      )
    )
  );


  function criarTarefas() {
    let elemento = prompt(
      console.log(`Escreva a tarefa a ser criada e tecle Enter: `)
    );
    return tarefas.push(elemento);
  }

  function alterarTarefa() {
    let index = parseInt(
      prompt(console.log(`Digite o índice da tarefa que deseja alterar: `))
    );
    if (index > -1) {
      tarefas.splice(index, 1);
    }
    let novaTarefa = prompt(console.log(`Escreva a nova tarefa: `));
    return tarefas.push(novaTarefa);
  }

  function apagarTarefa() {
    let delindex = parseInt(
      prompt(console.log(`Digite o índice da tarefa que deseja apagar: `))
    );
    if (delindex > -1) {
      tarefas.splice(delindex, 1);
    }
  }

  switch (menu) {
    case 1:
      criarTarefas();
      console.log(`Feito!`);
      break;
    case 2:
      tarefas.forEach(function (item, indice, tarefas) {
        console.log(item, indice);
      });
      break;
    case 3:
      tarefas.forEach(function (item, indice, tarefas) {
        console.log(item, indice);
      });
      alterarTarefa();
      console.log(`Feito!`);
      break;
    case 4:
      tarefas.forEach(function (item, indice, tarefas) {
        console.log(item, indice);
      });
      apagarTarefa();
      console.log(`Feito!`);
      break;
  }

  let sair = prompt(console.log(`Deseja continuar? S/N `));
  switch (sair) {
    case "n":
      controle = false;
      break;
  }
} while (controle == true);
