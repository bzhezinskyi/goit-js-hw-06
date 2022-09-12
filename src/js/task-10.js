const refs = {
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  value: document.querySelector('input'),
  boxes: document.querySelector('#boxes'),
};

let elements = [];

refs.create.addEventListener('click', onBoxes);
refs.destroy.addEventListener('click', destroyBoxes);

function onBoxes() {
  if (refs.value.value <= 100) {
    return createBoxes(refs.value.value);
  }
}

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');

    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();

    elements.push(element);
    size += 10;
  }
  refs.boxes.append(...elements);
}

function destroyBoxes() {
  for (const del of document.querySelectorAll('#boxes > div')) {
    del.remove();
  }
  elements = [];
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
