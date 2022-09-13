const categories = document.querySelector('#categories').children;

listItem(categories);

function listItem(object) {
  console.log(`Number of categories: ${object.length}`);

  for (const item of object) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(
      `Elements: ${item.lastElementChild.querySelectorAll('li').length}`
    );
  }
}
