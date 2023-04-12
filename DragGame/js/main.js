let top1 = 0;
let left1 = -140;

document.body.onkeydown = function (e) {
  let stickman = document.getElementById('stick')
  ev = e.keyCode

  switch (ev) {
    case 38 || 87:
      if (top1 <= 800 && top1 >= -100) {
        top1 -= 10;
        stickman.style.top = `${top1}px`
        stickman.style.transform = 'rotate(-90deg)'
      }
      break;

    case 40 || 83:
      if (top1 <= 790) {
        top1 += 10;
        stickman.style.top = `${top1}px`
        stickman.style.transform = 'rotate(90deg)'

      }
      break;

    case 37 || 65:
      if (left1 <= 1650 && left1 >= -80) {
        left1 -= 10;
        stickman.style.left = `${left1}px`
        stickman.style.transform = 'rotateY(180deg)'

      }
      break;

    case 39 || 68:
      if (left1 <= 1600) {
        left1 += 10;
        stickman.style.left = `${left1}px`
        stickman.style.transform = 'rotate(0deg)'

      }
      break;

  }

  if (top1 >= 540 && left1 >= 1300) {
    let gmover = document.querySelector('#gmover')
    gmover.style.display = 'block'
  }
}

function Try() {
  location.reload()
}


