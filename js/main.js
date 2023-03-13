const containerDom = document.querySelector(".container");
const scoreDom = document.getElementById("score");
const numeriIndovinatiDom = document.getElementById("numeri-indovinati");
console.log(containerDom);

let cellaNumero;
let listaNumeri = [];
let numeriUtente = [];
let risultato = [];

for (let i = 0; i < 5; i++) {
  numeroRandom = generaNumeroRandomUnico(listaNumeri, 1, 100);
  cellaNumero = numberContainerGenerator(numeroRandom);
  containerDom.append(cellaNumero);
  listaNumeri.push(numeroRandom);
}

setTimeout(function () {
  containerDom.classList.add("hide");
}, 30000);

setTimeout(function () {
  for (let i = 0; i < 5; i++) {
    let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 100"));
    numeriUtente.push(numeroUtente);
    if (listaNumeri.includes(numeroUtente)) {
      risultato.push(numeroUtente);
    }
    containerDom.classList.remove("hide");
  }

  scoreDom.innerHTML = `Il tuo risultato è ${risultato.length}`;
  numeriIndovinatiDom.innerHTML = `Hai indovinato i seguenti numeri: ${risultato}`;

  console.log(listaNumeri);
  console.log(numeriUtente);
  console.log(`I numeri uguali sono ${risultato}`);
}, 31000);

function generaNumeroRandom(min, max) {
  let numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numeroRandom;
}

function generaNumeroRandomUnico(blacklist, min, max) {
  let isValid = false;
  let numeroRandomUnico;

  while (!isValid) {
    numeroRandomUnico = generaNumeroRandom(min, max);
    if (!blacklist.includes(numeroRandomUnico)) {
      isValid = true;
    }
  }
  return numeroRandomUnico;
}

function numberContainerGenerator(number) {
  const numberContainer = document.createElement("div");
  numberContainer.innerHTML = number;
  numberContainer.classList.add("number-container");

  let misuraX = randomPosition(50, 1200);
  let misuraY = randomPosition(50, 600);
  numberContainer.style.position = `absolute`;
  numberContainer.style.top = misuraY;
  numberContainer.style.left = misuraX;

  let fontSize = generaNumeroRandom(50, 150);
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  numberContainer.style.fontSize = `${fontSize}px`;
  numberContainer.style.color = `#${randomColor}`;
  return numberContainer;
}

function randomPosition(misuraMin, misuraMax) {
  let x = generaNumeroRandom(misuraMin, misuraMax);
  return x + "px";
}

function promptNumeri() {
  let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 100"));
  return numeroUtente;
}
