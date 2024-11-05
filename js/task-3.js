let nameInput = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', handleInput);
function handleInput(event) {
  let name = nameInput.value.trim();
  if (name === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = name;
  }
  console.log(nameInput.value);
}
