const categories = document.querySelector('#categories');

console.log(`Number of categories: ${categories.children.length}`);

for (const item of categories.children) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(
    `Elements: ${item.lastElementChild.querySelectorAll('li').length}`
  );
}
