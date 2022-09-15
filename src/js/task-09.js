document
  .querySelector('.change-color')
  .addEventListener('click', onBodyBackgroundColor);

function onBodyBackgroundColor() {
  const bgColor = getRandomHexColor();
  document.body.style.backgroundColor = bgColor;
  document.querySelector('.color').textContent = bgColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
