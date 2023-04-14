let up = document.querySelector('.fa-arrow-up')
let down = document.querySelector('.fa-arrow-down')
let left = document.querySelector('.fa-arrow-left')
let right = document.querySelector('.fa-arrow-right')

let top1 = 0;
let left1 = -140;

document.body.onkeydown = function (e) {
  let stickman = document.getElementById('stick')
  ev = e.keyCode

  switch (ev) {
    case 38:
      up.style.backgroundColor = "gray"
      if (top1 <= 800 && top1 >= -100) {
        top1 -= 10;
        stickman.style.top = `${top1}px`
        stickman.style.transform = 'rotate(-90deg)'
      }
      break;

    case 40:
      down.style.backgroundColor = "gray"
      if (top1 <= 790) {
        top1 += 10;
        stickman.style.top = `${top1}px`
        stickman.style.transform = 'rotate(90deg)'
      }
      break;

    case 37:
      left.style.backgroundColor = "gray"
      if (left1 <= 1650 && left1 >= -80) {
        left1 -= 10;
        stickman.style.left = `${left1}px`
        stickman.style.transform = 'rotateY(-180deg)'
      }
      break;

    case 39:
      right.style.backgroundColor = "gray"
      if (left1 <= 1600) {
        left1 += 10;
        stickman.style.left = `${left1}px`
        stickman.style.transform = 'rotateY(0deg)'

      }
      break;

  }

}
document.body.onkeyup = function (e) {
  switch (ev) {
    case 38:
      down.style.backgroundColor = "black"
      up.style.backgroundColor = "black"
      left.style.backgroundColor = "black"
      right.style.backgroundColor = "black"
      break;

    case 40:
      down.style.backgroundColor = "black"
      up.style.backgroundColor = "black"
      left.style.backgroundColor = "black"
      right.style.backgroundColor = "black"
      break;

    case 37:
      down.style.backgroundColor = "black"
      up.style.backgroundColor = "black"
      left.style.backgroundColor = "black"
      right.style.backgroundColor = "black"
      break;

    case 39:
      down.style.backgroundColor = "black"
      up.style.backgroundColor = "black"
      left.style.backgroundColor = "black"
      right.style.backgroundColor = "black"
      break;

  }

  if (top1 >= 540 && left1 >= 1300) {
    let gmover = document.querySelector('#gmover')
    gmover.style.display = 'block'
  }
}

if (top1 >= 540 && left1 >= 1300) {
  let gmover = document.querySelector('#gmover')
  gmover.style.display = 'block'
}

function Try() {
  location.reload()
}


