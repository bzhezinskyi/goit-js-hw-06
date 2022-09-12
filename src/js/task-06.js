const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    return;
  }
  input.classList.remove('valid');
  input.classList.add('invalid');
  return;
});
