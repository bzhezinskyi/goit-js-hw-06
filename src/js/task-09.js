document
  .querySelector('.change-color')
  .addEventListener('click', onBodyBackgroundColor);

function onBodyBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
