//section Geral
const background = document.querySelector(".background_all");
let namePersonagem = document.getElementById("name_character");

//section header
const buttonJulius = document.querySelector(".button_julius");
const buttonRochele = document.querySelector(".button_rochele");

//section Rochele
const sectionRochelle = document.querySelector(".jogo_rochele");
const situationR = document.getElementById("situation");
const humorR = document.getElementById("humor");
const imgR = document.querySelector("#img_rochele");
let botao = document.querySelector(".change_1");

//section Julius
const sectionJulius = document.querySelector(".jogo_julius");
const situationJ = document.querySelector("#situationJ");
const humorJ = document.querySelector("#humorJ");
const imgJ = document.querySelector("#img_julius");
let btnChangeJ = document.querySelector(".change_2");

//header => troca de display e background

function changeDisplay(section, display) {
  section.style.display = display;
}

function changeName_Back(name, colorB) {
  namePersonagem.innerText = name;
  background.style.background = colorB;
}

buttonJulius.addEventListener("click", () => {
  changeDisplay(sectionJulius, "flex");
  changeName_Back("do Julius", "#5A952D");
  changeDisplay(sectionRochelle, "none");
});

buttonRochele.addEventListener("click", () => {
  changeDisplay(sectionRochelle, "flex");
  changeName_Back("da Rochelle", "#952d95");
  changeDisplay(sectionJulius, "none");
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

//Rochele
botao.addEventListener("click", () => {
  if (botao.value == "um") {
    changeDOM(situationR, "Esposa", humorR, "Surtada", imgR, "./assets/imagens/RochelleSurtada.gif", botao, "dois")
  } else if (botao.value == "dois") {
    changeDOM(situationR, "Modelo", humorR, "Soberba", imgR, "./assets/imagens/modeloRochelle.gif", botao, "três")
  } else if (botao.value == "três") {
    changeDOM(situationR, "Cozinheira", humorR, "Estressada", imgR, "./assets/imagens/DonadecasaRoche.gif", botao, "quatro")
  } else if (botao.value == "quatro") {
    changeDOM(situationR, "Motorista", humorR, "Veloz e Furiosa", imgR, "./assets/imagens/RocheleDirigindo.jpg", botao, "cinco")
  } else if (botao.value == "cinco") {
    changeDOM(situationR, "Irmã Rochele", humorR, "Competitiva", imgR, "./assets/imagens/IrmaRochelle.gif", botao, "seis")
  } else {
    changeDOM(situationR, "Mãe", humorR, "Pistola", imgR, "./assets/imagens/Rochelle.gif", botao, "um")
  }
});

//julius
btnChangeJ.addEventListener("click", () => {
    if (btnChangeJ.value == "umJ") {
    changeDOM(situationJ, "Sozinho em casa", humorJ, "Livre", imgJ, "./assets/img_julius/julius_cantando.gif", btnChangeJ, "doisJ");
  } else if (btnChangeJ.value == "doisJ") {
    changeDOM(situationJ, "Marido", humorJ, "Sincero", imgJ, "./assets/img_julius/J_sincero.gif", btnChangeJ, "umJ")
  }
});

