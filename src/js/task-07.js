const refs = {
  control: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.control.addEventListener('change', onControlChange);

function onControlChange(event) {
  const fontSize = `${event.currentTarget.value}px`;
  refs.text.style.fontSize = fontSize;
}
