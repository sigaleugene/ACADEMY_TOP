posX = 0;
posY = 0;
targetX = 0;
targetY = 0;
rect = document.getElementById("br");

function getCoord(e) {
  console.log(`x:${e.clientX} y:${e.clientY}`);
  posX = parseInt(window.getComputedStyle(rect).left);
  posY = parseInt(window.getComputedStyle(rect).top);
  targetX = e.clientX;
  targetY = e.clientY;
  window.requestAnimationFrame(move);
}

function move() {
  let rect1 = document.getElementById("br");
  if (posX < targetX || posY < targetY) {
    console.log(`x ${posX} : ${targetX}`);
    console.log(`y ${posY} : ${targetY}`);
    if (posX < targetX) posX += 1;
    if (posY < targetY) posY += 1;

    rect1.style.left = posX + "px";
    rect1.style.top = posY + "px";
    window.requestAnimationFrame(move);
  }
}

document.onmouseup = getCoord;
