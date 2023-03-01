const cube = document.querySelector('.cube');
let rotation = 0;
let colorIndex = 0;

const colors = [  'bg-blue-200 text-gray-900',  'bg-green-200 text-gray-900',  'bg-yellow-200 text-gray-900',  'bg-pink-200 text-gray-900',  'bg-purple-200 text-gray-900',  'bg-red-200 text-gray-900',];

function rotateCube() {
  cube.style.transform = `rotateX(${rotation}deg) rotateY(${rotation}deg)`;
  rotation += 90;
  if (rotation === 360) {
    rotation = 0;
  }
}

function changeColors() {
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');
  const colorsLength = colors.length;
  body.classList.remove(colors[colorIndex % colorsLength]);
  h1.classList.remove(colors[colorIndex % colorsLength]);
  h2.classList.remove(colors[colorIndex % colorsLength]);
  colorIndex++;
  body.classList.add(colors[colorIndex % colorsLength]);
  h1.classList.add(colors[colorIndex % colorsLength]);
  h2.classList.add(colors[colorIndex % colorsLength]);
}

setInterval(() => {
  rotateCube();
  changeColors();
}, 3000);
