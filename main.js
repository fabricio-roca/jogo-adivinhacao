let nome;
let numberSecretor;
let chances;
let inputChances = document.getElementById("chances");

  /* função para nome do jogador */
  btnNome = function() {
      nome = document.getElementById("nome").value;
      alert('Olá ' + nome + ', é um prazer te ver!');
  }

  /* função para a escolha do nivel do jogo */
  btnNivel = function(){
    let inputNivel = document.getElementsByName("nivel");
    let nivel;

    for (let i = 0; i < inputNivel.length; i++){
      if(inputNivel[i].checked){
        nivel = inputNivel[i].value;
      }
    }
    console.log(nivel);

    if(nivel == 1){
      chances = 5;
      numberSecretor = parseInt(Math.random() * 11);
      inputChances.innerHTML = "Você tem " + chances + " tentativas!";
      console.log(numberSecretor);
    }else{
      chances = 10;
      numberSecretor = parseInt(Math.random() * 21)
      inputChances.innerHTML = "Você tem " + chances + " tentativas!";
      console.log(numberSecretor);
    }

    let message = (nome +' escolheu o nivel '+ nivel + '! voce tem ' + chances + ' chances.');
    alert(message);
  }

  /* função para começar o jogo */
  btnJogar = function(){

    let number = document.getElementById("numero").value;
    let resulted = document.getElementById("resultado");

    if (number == numberSecretor) {
      resulted.innerHTML = "Você acertou! o numero é " + numberSecretor;
      console.log("Acertou");
    } else {
      resulted.innerHTML = "Errou";
      chances--;
      inputChances.innerHTML = "Você tem " + chances + " tentativas!";
      console.log(chances);
    }
  }