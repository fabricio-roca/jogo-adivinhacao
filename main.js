let numberSecretor;
let chances;
let numeroColetado = [];
let front = {
  /*
  *Entrada de Dados */
  inputs: {
    chances: document.getElementById("chancesText"),
    nome: document.getElementById("nome"),
    nivel: document.getElementsByName("nivel"),
    numero: document.getElementById("numero"),
  },
  /*
  *Saida de Dados */
  outputs:{
    nomeHtml: document.getElementById("nomeText"),
    chancesHtml: document.getElementById("chancesText"),
    messageHtml: document.getElementById("messageText"),
    resultadoHtml: document.getElementById("resultado")
  }
};
let inputChances = document.getElementById("chancesText");

/*
  *função para nome do jogador */
btnNome = function () {
  front.outputs.nomeHtml.innerHTML = `Olá ${front.inputs.nome.value}, é um prazer te ver!`;
};

/*
  *função para a escolha do nivel do jogo */
btnNivel = function () {
  let inputNivel = document.getElementsByName("nivel");
  let nivel;

  for (let i = 0; i < inputNivel.length; i++) {
    if (inputNivel[i].checked) {
      nivel = inputNivel[i].value;
    }
  }
  console.log(nivel);

  if (nivel == 1) {
    chances = 5;
    numberSecretor = parseInt(Math.random() * 10) + 1;
    front.outputs.chancesHtml.innerHTML = "Você tem " + chances + " tentativas!";
    console.log("Numero Sortido", numberSecretor);
  } else {
    chances = 10;
    numberSecretor = parseInt(Math.random() * 20) + 1;
    front.outputs.chancesHtml.innerHTML = "Você tem " + chances + " tentativas!";
    console.log("Numero Sortido", numberSecretor);
  }

  let message =
    front.inputs.nome.value + " escolheu o nivel " + nivel + "!";
    front.outputs.messageHtml.innerHTML =(message);
};

/*
  *função para começar o jogo */
btnJogar = function () {
  console.log("numero coletado array", numeroColetado);

  if (front.inputs.numero.value == numberSecretor) {
    front.outputs.resultadoHtml.innerHTML = "Você acertou! o numero é " + numberSecretor;
    console.log("Acertou");
    fimJogo();
  }else {
    if (numeroColetado.includes(front.inputs.numero.value.toString())){
      front.outputs.chancesHtml.innerHTML = "Você ja escolheu esse numero!";
    }else{
      numeroColetado.push(front.inputs.numero.value);
      tentativaNumero();
      chances--;
      front.outputs.chancesHtml.innerHTML = "Você tem " + chances + " tentativas!";
      }
    console.log("Numero de chances", chances);
    if (chances == 0) {
      fimJogo();
      inputChances.innerHTML = "Acabou suas chances, você perdeu";
    };
  }
}

/*
 * função fim do jogo */
fimJogo = function () {
  let btnDisabled = document.getElementById("inputJogo").disabled = true;
};

/*
  * função de maior e menor*/
tentativaNumero = function(){
  if (front.inputs.numero.value > numberSecretor){
    front.outputs.resultadoHtml.innerHTML = "Errou, o numero é menor.";
  }else{
    front.outputs.resultadoHtml.innerHTML = "Errou, o numero é maior.";
  }
}
