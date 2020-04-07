let texto_ouvir = document.querySelector("#text_to_listen")
let texto_usuario = document.querySelector("#text_user")
let caixa_correcao = document.querySelector("#check-box")

function ler(){
  if(texto_ouvir.value == ""){
    alert("O campo está vazio!\nDigite algo.")
    return
  }
  play()
  document.querySelector(".divLer").classList.add("invisible")
  document.querySelector(".divCheck").classList.remove("invisible")
}

function correcao(){
  if(texto_usuario.value == ""){
    alert("O campo está vazio!\nDigite algo.")
    return
  }
  verify()
  document.querySelector(".divCheck").classList.add("invisible")
  document.querySelector(".divCorrecao").classList.remove("invisible")
}

function refazer(){
  texto_ouvir.value = ""
  texto_usuario.value = ""
  document.querySelector(".divCorrecao").classList.add("invisible")
  document.querySelector(".divLer").classList.remove("invisible")
}

function play(texto_pronto, texto){

  let texto_fala = ""
  if(texto_pronto){
    texto_fala = texto
  }else{
    texto_fala = texto_ouvir.value
  }  

  const voz = window.speechSynthesis
  const fala = new SpeechSynthesisUtterance(texto_fala)
  fala.lang = "en-US"
  voz.speak(fala)
}

function verify(texto_pronto, texto_nivel){
  
  let cont = 0;
  let correcao = "";

  let texto
  if(texto_pronto){
    texto = texto_nivel.toLowerCase().split(" ");
  }else{
    texto = texto_ouvir.value.toLowerCase().split(" ");
  }

  let texto_digitado = texto_usuario.value.toLowerCase().split(" ");

  for (let i of texto_digitado){
    cont = texto.indexOf(i)
    if (cont === -1){
      correcao += `${i} `
    }
  }
  if(texto_digitado < texto && correcao.length == 0){
    caixa_correcao.value = "As palavras digitadas estão corretas, porém está faltando palavras"
  }
  else if(correcao.length == 0){
    caixa_correcao.value = "parabéns"
  }else{
    let num_correcao = correcao.split(" ").length
    caixa_correcao.value = `Texto Correto: ${texto_ouvir.value}\n\nTexto Digitado: ${texto_usuario.value}\n\nPalavras Erradas: ${correcao}\n\nQuantidade de erros: ${num_correcao - 1}`
  }
  return correcao;
}

//Aparecer os botôes dos níveis
function aparecerNiveisEasy(){
  document.querySelector(".easy").classList.toggle('invisible')
  document.querySelector(".medium").classList.add('invisible')
  document.querySelector(".hard").classList.add('invisible')
}
function aparecerNiveisMedium(){
  document.querySelector(".medium").classList.toggle('invisible')
  document.querySelector(".easy").classList.add('invisible')
  document.querySelector(".hard").classList.add('invisible')
}
function aparecerNiveisHard(){
  document.querySelector(".hard").classList.toggle('invisible')
  document.querySelector(".easy").classList.add('invisible')
  document.querySelector(".medium").classList.add('invisible')
}

//Botôes de níveis
niveis = {
  easy1: "how are you",
  easy2: "what is your name",
  easy3: "how old are you",
  medium1: "My parents got a new car",
  hard6: "If two witches would watch two watches, which witch would watch which watch?"
}

function easy1(){
  play(true, niveis.easy1)
  document.querySelector(".divLer").classList.add("invisible")
  document.querySelector(".divCheck").classList.remove("invisible")
  //verify(true, niveis.easy1)
}
function easy2(){
  play(true, niveis.easy2)
  document.querySelector(".divLer").classList.add("invisible")
  document.querySelector(".divCheck").classList.remove("invisible")
  //verify(true, niveis.easy1)
}
function easy3(){
  play(true, niveis.easy3)
  document.querySelector(".divLer").classList.add("invisible")
  document.querySelector(".divCheck").classList.remove("invisible")
  //verify(true, niveis.easy3)
}
function medium1(){
  play(true, niveis.medium1)
  document.querySelector(".divLer").classList.add("invisible")
  document.querySelector(".divCheck").classList.remove("invisible")
  //verify(true, niveis.medium1)
}
function hard6(){
  play(true, niveis.hard6)
  document.querySelector(".divLer").classList.add("invisible")
  document.querySelector(".divCheck").classList.remove("invisible")
  //verify(true, niveis.hard6)
}







