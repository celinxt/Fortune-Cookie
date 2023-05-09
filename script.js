const card = document.querySelector(".card");
const cardTwo = document.querySelector(".card-two");
const closedCookie = document.getElementById("closed-cookie");
const btnTryAgain = document.getElementById("btn-try-again");
const message = [
  "O aprendizado é como o horizonte: não há limites.",
  "Não há que ser forte, há que ser flexível.",
  "Limitações são fronteiras criadas apenas pela nossa mente.",
  "O cão não ladra por valentia e sim por medo.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "A palavra é prata, o silêncio é ouro.",
  "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "A persistência realiza o impossível.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
];

// Functions
let pickMessage = () => {
  let allMessages = message.length;
  let randomNum = Math.floor(Math.random() * allMessages);
  cardTwo.querySelector("#msg").innerText = `${message[randomNum]}`;
};

let toggleFunc = () => {
  card.classList.toggle("hide");
  cardTwo.classList.toggle("hide");
};

let clickOpenCookie = (event) => {
  event.preventDefault();
  toggleFunc();
  pickMessage();
};

let clickTryAgain = (event) => {
  event.preventDefault();
  toggleFunc();
};

// Events
closedCookie.addEventListener("click", clickOpenCookie);
btnTryAgain.addEventListener("click", clickTryAgain);

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && cardTwo.classList.contains("hide")) {
    clickOpenCookie(e);
  } else if (e.key == "Enter" && card.classList.contains("hide")) {
    clickTryAgain(e);
  }
});
