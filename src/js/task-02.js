const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const listItem = document.createElement('li');

  listItem.textContent = element;
  listItem.classList.add('item');
  console.log('~ listItem', listItem);

  return listItem;
});

list.append(...elements);
