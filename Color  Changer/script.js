const body = document.body; // select body
const colorBoxes = document.querySelectorAll('.box'); //select all box
colorBoxes.forEach((box) => {
  box.addEventListener('click', (event) => {
    const color = event.target.id;
    if (color) {
      body.style.backgroundColor = color;
    }
  });
});
