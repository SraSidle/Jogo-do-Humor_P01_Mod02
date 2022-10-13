//section Geral
const background = document.querySelector(".background_all");
let namePersonagem = document.getElementById("name_character");

//section menu
const hamburguer = document.querySelector(".hamburguer");
const container = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");

//section menu header
const btnSerie = document.querySelector(".btn_serie");
const btnChris = document.querySelector(".btn_chris");
const btnRochelle = document.querySelector(".btn_rochelle");
const btnJulius = document.querySelector(".btn_julius");
const btnDrew = document.querySelector(".btn_drew");
const btnTonya = document.querySelector(".btn_tonya");

//img

const presentation = document.querySelector(".first_page");

//section Chris
const sectionChris = document.querySelector(".jogo_chris");
const situationC = document.getElementById("situationC");
const humorC = document.getElementById("humorC");
const imgC = document.getElementById("img_chris");
let btnChangeC = document.querySelector(".change1")

//section Rochele
const sectionRochelle = document.querySelector(".jogo_rochelle");
const situationR = document.getElementById("situationR");
const humorR = document.getElementById("humorR");
const imgR = document.getElementById("img_rochelle");
let btnChangeR = document.querySelector(".change2");

//section Julius
const sectionJulius = document.querySelector(".jogo_julius");
const situationJ = document.querySelector("#situationJ");
const humorJ = document.getElementById("humorJ");
const imgJ = document.getElementById("img_julius");
let btnChangeJ = document.querySelector(".change3");

//section Drew
const sectionDrew = document.querySelector(".jogo_drew");
const situationD = document.getElementById("situationD");
const humorD = document.getElementById("humorD");
const imgD = document.getElementById("img_drew");
let btnChangeD = document.querySelector(".change4")

//section Tonya
const sectionTonya = document.querySelector(".jogo_tonya");
const situationT = document.getElementById("situationT");
const humorT = document.getElementById("humorT");
const imgT = document.getElementById("img_tonya");
let btnChangeT = document.querySelector(".change5")

//menu => function ativa/desativa
hamburguer.addEventListener("click", () => {
  if(container.classList.toggle("show_menu")){
    sidebar.style.right = "0rem"
  } else {
    sidebar.style.right = "-20rem"
  } 
})

//header => troca de display e background

function changeDisplay(section, display) {
  section.style.display = display;
}

function changeName_Back(name, colorB) {
  namePersonagem.innerText = name;
  background.style.background = colorB;
}

btnSerie.addEventListener("click", () => {
  changeDisplay(presentation, "flex");
  changeName_Back("Todo Mundo Odeia o Chris", "linear-gradient(rgb(197, 200, 45), rgb(207, 217, 25), rgb(197, 200, 45)");
  changeDisplay(sectionChris, "none");
  changeDisplay(sectionRochelle, "none");
  changeDisplay(sectionJulius, "none");
  changeDisplay(sectionDrew, "none");
  changeDisplay(sectionTonya, "none");
})

btnChris.addEventListener("click", () => {
  changeDisplay(sectionChris, "flex");
  changeName_Back("do Chris", "#C4DD68");
  changeDisplay(presentation, "none");
  changeDisplay(sectionRochelle, "none");
  changeDisplay(sectionJulius, "none");
  changeDisplay(sectionDrew, "none");
  changeDisplay(sectionTonya, "none");
})

btnRochelle.addEventListener("click", () => {
  changeDisplay(sectionRochelle, "flex");
  changeName_Back("da Rochelle", "#952d95");
  changeDisplay(presentation, "none");
  changeDisplay(sectionChris, "none");
  changeDisplay(sectionJulius, "none");
  changeDisplay(sectionDrew, "none");
  changeDisplay(sectionTonya, "none");
});

btnJulius.addEventListener("click", () => {
  changeDisplay(sectionJulius, "flex");
  changeName_Back("do Julius", "#3AAEA8");
  changeDisplay(presentation, "none");
  changeDisplay(sectionChris, "none");
  changeDisplay(sectionRochelle, "none");
  changeDisplay(sectionDrew, "none");
  changeDisplay(sectionTonya, "none");
});

btnDrew.addEventListener("click", () => {
  changeDisplay(sectionDrew, "flex");
  changeName_Back("do Drew", "#8DC13A");
  changeDisplay(presentation, "none");
  changeDisplay(sectionChris, "none");
  changeDisplay(sectionRochelle, "none");
  changeDisplay(sectionJulius, "none");
  changeDisplay(sectionTonya, "none");
});

btnTonya.addEventListener("click", () => {
  changeDisplay(sectionTonya, "flex");
  changeName_Back("da Tonya", "#A83B71");
  changeDisplay(presentation, "none");
  changeDisplay(sectionChris, "none");
  changeDisplay(sectionRochelle, "none");
  changeDisplay(sectionJulius, "none");
  changeDisplay(sectionDrew, "none");
});

//body => troca de humor
function changeDOM(
  situation,
  newSituation,
  humor,
  newHumor,
  img,
  newImg,
  btnValue,
  newBtnValue
) {
  situation.innerText = newSituation;
  humor.textContent = newHumor;
  img.src = newImg;
  btnValue.value = newBtnValue;
}
//Chris
btnChangeC.addEventListener("click", () => {
  if(btnChangeC.value == "umC") {
    changeDOM(situationC, "Chris Estatudante", humorC, "Confuso", imgC, "./assets/images/imgsChris/chrisConfuso.gif", btnChangeC, "doisC");
  } else if(btnChangeC.value == "doisC") {
    changeDOM(situationC, "Chris Filho", humorC, "Incrédulo", imgC, "./assets/images/imgsChris/chrisIncredulo.gif", btnChangeC, "tresC");
  } else if(btnChangeC.value == "tresC") {
    changeDOM(situationC, "Chris Maneiro", humorC, "Descolado", imgC, "./assets/images/imgsChris/chrisDescolado.gif", btnChangeC, "quatroC");
  } else if(btnChangeC.value == "quatroC") {
    changeDOM(situationC, "Chris DJ", humorC, "Botando pra Quebrar", imgC, "./assets/images/imgsChris/chrisMusical.webp", btnChangeC, "cincoC");
  } else if(btnChangeC.value == "cincoC") {
    changeDOM(situationC, "Eleições 2022", humorC, "Desespero", imgC, "./assets/images/imgsChris/chrisSurtado.gif", btnChangeC, "seisC");
  } else if(btnChangeC.value == "seisC") {
    changeDOM(situationC, "Eleições estudandis", humorC, "Político", imgC, "./assets/images/imgsChris/chrisPolitico.gif", btnChangeC, "umC");
  }
})

//Rochelle
btnChangeR.addEventListener("click", () => {
  if (btnChangeR.value == "um") {
    changeDOM(situationR, "Esposa", humorR, "Surtada", imgR, "./assets/images/imgsRochelle/RochelleSurtada.gif", btnChangeR, "dois")
  } else if (btnChangeR.value == "dois") {
    changeDOM(situationR, "Modelo", humorR, "Soberba", imgR, "./assets/images/imgsRochelle/modeloRochelle.gif", btnChangeR, "três")
  } else if (btnChangeR.value == "três") {
    changeDOM(situationR, "Cozinheira", humorR, "Estressada", imgR, "./assets/images/imgsRochelle/DonadecasaRoche.gif", btnChangeR, "quatro")
  } else if (btnChangeR.value == "quatro") {
    changeDOM(situationR, "Motorista", humorR, "Veloz e Furiosa", imgR, "./assets/images/imgsRochelle/RocheleDirigindo.jpg", btnChangeR, "cinco")
  } else if (btnChangeR.value == "cinco") {
    changeDOM(situationR, "Irmã Rochele", humorR, "Competitiva", imgR, "./assets/images/imgsRochelle/IrmaRochelle.gif", btnChangeR, "seis")
  } else {
    changeDOM(situationR, "Mãe", humorR, "Pistola", imgR, "./assets/images/imgsRochelle/Rochelle.gif", btnChangeR, "um")
  }
});

//Julius
btnChangeJ.addEventListener("click", () => {
    if (btnChangeJ.value == "umJ") {
    changeDOM(situationJ, "Sozinho em casa", humorJ, "Livre Dançante", imgJ, "./assets/images/imgsJulius/julius_cantando.gif", btnChangeJ, "doisJ");
  } else if (btnChangeJ.value == "doisJ") {
    changeDOM(situationJ, "Chegou a Fatura", humorJ, "  Indignado", imgJ, "./assets/images/imgsJulius/juliusZangado.gif", btnChangeJ, "tresJ")
  } else if (btnChangeJ.value == "tresJ") {
    changeDOM(situationJ, "Sobrou Dinheiro", humorJ, "Realizado", imgJ, "./assets/images/imgsJulius/juliusSorrindo.gif", btnChangeJ, "quatroJ");
  }  else if (btnChangeJ.value == "quatroJ") {
    changeDOM(situationJ, "Marido Julius", humorJ, "Sincero", imgJ, "./assets/images/imgsJulius/J_sincero.gif", btnChangeJ, "umJ");
  }
});

//Drew
btnChangeD.addEventListener("click", () => {
  if (btnChangeD.value == "umD") {
    changeDOM(situationD, "Cadê meu dinheiro?", humorD, "Agiota", imgD, "./assets/images/imgsDrew/drewAgiota.jpg", btnChangeD, "doisD")
  } else if(btnChangeD.value == "doisD") {
    changeDOM(situationD, "Meu time ganhou", humorD, "Zueiro", imgD, "./assets/images/imgsDrew/drewZueiro.gif", btnChangeD, "tresD")
  } else if(btnChangeD.value == "tresD") {
    changeDOM(situationD, "Piadas de natal", humorD, "Morrendo de Rir", imgD, "./assets/images/imgsDrew/drewSorrindo.gif", btnChangeD, "umD")
  }
})

//Tonya
btnChangeT.addEventListener("click", () => {
  if(btnChangeT.value == "umT"){
    changeDOM(situationT, "Comeram meu pudim", humorT, "Com ódio", imgT, "./assets/images/imgsTonya/tonya.jpg", btnChangeT, "doisT")
  } else if(btnChangeT.value == "doisT") {
    changeDOM(situationT, "Vizinho com som alto", humorT, "Dor de cabeça", imgT, "./assets/images/imgsTonya/tonyaEnxaqueca.gif", btnChangeT, "tresT")
  } else if (btnChangeT.value == "tresT") {
    changeDOM(situationT, "Gastar dinheiro", humorT, "Mãe não deixou", imgT, "./assets/images/imgsTonya/tonyaRe.gif", btnChangeT, "quatroT")
  } else if(btnChangeT.value == "quatroT") {
    changeDOM(situationT, "Vai ver sua tia", humorT, "Não gosto", imgT, "./assets/images/imgsTonya/tonya.jpg", btnChangeT, "umT")
  } 
})


