
  // Done day 1
  const getCode = () => {
    return event.keyCode;
  }

  const getElement = () => {
    const keyNumber = getCode();
    return document.querySelector(`[data-key='${keyNumber}']`);
  }

  const getAudio = () => {
    const keyNumber = getCode();
    return document.querySelector(`audio[data-key='${keyNumber}']`);
  }

  function playSound(event) {
    const audioInfo = getAudio();
    if(!audioInfo) return
    var audio = new Audio(audioInfo.src);
    audio.play();
    const key = getElement();
    key.classList.add("playing");
  }

  function cleaning(event) {
    const key = getElement();
    key.classList.remove("playing");
  }

  window.addEventListener('keydown', playSound);

  window.addEventListener('keyup', cleaning);
