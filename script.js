const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let newColors = [];

function randomColor() {
  newColors = [];
  for (let i = 0; i < 6; i++) {
    const randomPick = colors[
      Math.floor(Math.random(colors[i]) * colors.length)
    ].toString();
    newColors.push(randomPick);
  }
  return `#${newColors.join('')}`;
}

const handleClick = () => {
  for (let i = 1; i < 6; ++i) {
    document.getElementById(`color${i}`).style.backgroundColor = randomColor();
  }
};
