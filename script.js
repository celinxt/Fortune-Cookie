const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const imgClick = document.querySelector("#imgClick");
const btnReset = document.querySelector("#btnReset");

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

imgClick.addEventListener("click", TryClick);
btnReset.addEventListener("click", ResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && card2.classList.contains("hide")) {
    TryClick();
  } else if (e.key == "Enter" && card.classList.contains("hide")) {
    ResetClick();
  }
});

function TryClick() {
  toggleScreen();
  pickMessage();
}

function ResetClick() {
  toggleScreen();
}

function pickMessage() {
  let allMessages = message.length;
  let randomNum = Math.floor(Math.random() * allMessages);
  card2.querySelector("#msg").innerText = `${message[randomNum]}`;
}

function toggleScreen() {
  card.classList.toggle("hide");
  card2.classList.toggle("hide");
}
