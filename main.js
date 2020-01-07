function play() {
  document.getElementById("anubhav").play();
}

function preventDefaultAction(evt) {
  evt.preventDefault();
}

window.addEventListener("dblclick", preventDefaultAction, false);
