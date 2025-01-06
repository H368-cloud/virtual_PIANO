const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio  = new Audio("tunes/tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/tunes/${key}.wav`;
    audio.play();
}

pianoKeys.forEach(key => {
    key.addEventListener('click', () => playTune(key.dataset.key));
    console.log(key.dataset.key)
});

const pressedkey = (e) => {
    playTune(e.key);
}

document.addEventListener("keydown",pressedkey)