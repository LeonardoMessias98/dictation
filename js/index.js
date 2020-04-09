let texto_ouvir = document.querySelector("#text_to_listen");
let texto_usuario = document.querySelector("#text_user");
let caixa_correcao = document.querySelector("#check-box");
let valor_atual;

let is_in_last_screen = false;

function ler(){
  if(texto_ouvir.value == ""){
    alert("O campo está vazio!\nDigite algo.");
    return
  }

  valor_atual = texto_ouvir.value;

  play();

  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
}

function correcao(){
  if(texto_usuario.value == ""){
    alert("O campo está vazio!\nDigite algo.");
    return
  }
  verify()

  is_in_last_screen = true;

  document.querySelector(".divCheck").classList.add("invisible");
  document.querySelector(".divCorrecao").classList.remove("invisible");
}

function refazer(){
  is_in_last_screen = false;

  texto_ouvir.value = "";
  texto_usuario.value = "";
  document.querySelector(".divCorrecao").classList.add("invisible");
  document.querySelector(".divLer").classList.remove("invisible");
}

function play(){
  const voz = window.speechSynthesis;
  const fala = new SpeechSynthesisUtterance(valor_atual);
  fala.lang = "en-US";
  voz.speak(fala);
}

function verify(){
  
  let cont = 0;
  let correcao = "";

  let texto = valor_atual.toLowerCase().split(" ");

  let texto_digitado = texto_usuario.value.toLowerCase().split(" ");

  for (let i of texto_digitado){
    cont = texto.indexOf(i);
    if (cont === -1){
      correcao += `${i} `;
    }
  }
  if(texto_digitado < texto && correcao.length == 0){
    caixa_correcao.value = "As palavras digitadas estão corretas, porém está faltando palavras";
  }
  else if(correcao.length == 0){
    caixa_correcao.value = "parabéns";
  }else{
    let num_correcao = correcao.split(" ").length;
    caixa_correcao.value = `Texto Correto: ${valor_atual}\n\nTexto Digitado: ${texto_usuario.value}\n\nPalavras Erradas: ${correcao}\n\nQuantidade de erros: ${num_correcao - 1}`;
  }
  return correcao;
}

//Aparecer os botôes dos níveis
function aparecerNiveisEasy(){
  document.querySelector(".easy").classList.toggle('invisible');
  document.querySelector(".medium").classList.add('invisible');
  document.querySelector(".hard").classList.add('invisible');
}
function aparecerNiveisMedium(){
  document.querySelector(".medium").classList.toggle('invisible');
  document.querySelector(".easy").classList.add('invisible');
  document.querySelector(".hard").classList.add('invisible');
}
function aparecerNiveisHard(){
  document.querySelector(".hard").classList.toggle('invisible');
  document.querySelector(".easy").classList.add('invisible');
  document.querySelector(".medium").classList.add('invisible');
}

//Botões de níveis
niveis = {
  easy1: "how are you",
  easy2: "what is your name",
  easy3: "how old are you",
  easy4: "what is going on",
  easy5: "how is your day",
  easy6: "long time no see",
  medium1: "no pain, no gain",
  medium2: "make a long story short",
  medium3: "better late than never",
  medium4: "pull yourself together",
  medium5: "get something out of your system",
  medium6: "give someone the benefit of the doubt",
  hard1: "she sells seashells by the seashore",
  hard2: "how can a clam cram in a clean cream can?",
  hard3: "a loyal warrior will rarely worry why we rule",
  hard4: "I wish to wash my Irish wristwatch",
  hard5: "how much wood would a woodchuck chuck, if a woodchuck could chuck wood",
  hard6: "if two witches would watch two watches, which witch would watch which watch?"
}

function easy1(){;
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.easy1;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  

}
function easy2(){;
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.easy2;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  

}
function easy3(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.easy3;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function easy4(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.easy4;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function easy5(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.easy5;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function easy6(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.easy6;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}

function medium1(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }va
  
  lor_atual = niveis.medium1;
    
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function medium2(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.medium2;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function medium3(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.medium3;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function medium4(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.medium4;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function medium5(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.medium5;
  
  play();

  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function medium6(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.medium6;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function hard1(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.hard1;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function hard2(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.hard2;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function hard3(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.hard3;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");
  
}
function hard4(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.hard4;
  
  play();

  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");

}
function hard5(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.hard5;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");

}
function hard6(){
  if(is_in_last_screen){
    alert("Clique em finalizar para ouvir a proxima lição !")
    return
  }
  
  valor_atual = niveis.hard6;
  
  play();
  
  document.querySelector(".divLer").classList.add("invisible");
  document.querySelector(".divCheck").classList.remove("invisible");

}
