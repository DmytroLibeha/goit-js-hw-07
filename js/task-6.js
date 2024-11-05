function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = inputRef.value;
  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  inputRef.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + i * 10;
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.backgroundColor = getRandomHexColor();

    fragment.appendChild(div);
  }

  boxesRef.innerHTML = '';
  boxesRef.appendChild(fragment);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}
