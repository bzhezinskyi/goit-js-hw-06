const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

ingredients.map(element => {
  const listItem = document.createElement('li');

  listItem.textContent = element;
  listItem.classList.add('item');

  // todo Доробити відправлення всого за раз
  list.append(listItem);
});
