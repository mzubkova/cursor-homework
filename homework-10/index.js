function playSound(e) {
  const attribute = `[data-key="${event.keyCode}"]`;
  const audio = document.querySelector("audio" + attribute);
  const key = document.querySelector("div" + attribute);
  if (event.keyCode === key) audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition() {
  this.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) =>
  key.addEventListener("transitionend", removeTransition, false)
);
document.addEventListener("keydown", playSound);

// function playSound(e) {
//   const attribute = `[data-key="${e.keyCode}"]`;
//   const audio = document.querySelector('audio' + attribute);
//   const key = document.querySelector('div' + attribute);

//   if (!key)
//     return;

//   key.classList.add('playing');
//   audio.currentTime = 0;
//   audio.play();
// };

// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return;
//   this.classList.remove('playing');
// };

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition))
// document.addEventListener('keydown', playSound);
