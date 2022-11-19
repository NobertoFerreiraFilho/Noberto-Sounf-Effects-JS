
const tocaSom = (audioSelector) => {
  const AudioSelected = document.querySelector(audioSelector);
  AudioSelected.play();
};

const teclas = document.querySelectorAll(".tecla");

teclas.forEach((tecla) => {
  tecla.onclick = () => {
    tocaSom(`#som_${tecla.classList[1]}`);
  };

  tecla.onkeydown = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = (e) => {
    tecla.classList.remove("ativa");
  };
});
