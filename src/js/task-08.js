const form = document.querySelector('.login-form');
const user = {};

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  user.email = email.value;
  user.password = password.value;

  console.log(user);
  event.currentTarget.reset();
}
