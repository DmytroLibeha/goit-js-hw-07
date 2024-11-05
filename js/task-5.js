function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
button.addEventListener('click', handlerChangeColor);

const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');

function handlerChangeColor(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
}
