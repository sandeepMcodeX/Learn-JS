const player = document.getElementById('player');

let playerPositionX = 0;
let playerPositionY = 0;



function movePlayer(direction) {
  if (direction === 'left') {
    playerPositionX = -10;
    player.style.left = playerPositionX + 'px';
  } else if (direction === 'right') {
    playerPositionX += 10;
    player.style.left = playerPositionX + 'px';
  } else if (direction === 'up') {
    playerPositionY -= 10;
    player.style.bottom = playerPositionY + 'px';
  } else if (direction === 'down') {
    playerPositionY += 10;
    player.style.bottom = playerPositionY + 'px';
  }
}

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key === 'ArrowLeft') {
    movePlayer('left');
  } else if (key === 'ArrowRight') {
    movePlayer('right');
  } else if (key === 'ArrowUp') {
    movePlayer('up');
  } else if (key === 'ArrowDown') {
    movePlayer('down');
  }
});
