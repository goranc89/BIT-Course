var body = document.querySelector('.wraper');
var img = document.querySelector('img');
var xPos = 0;
var yPos = "0px";

function moveBackgroundRight(event) {
  if (event.keyCode === 39) {
    body.style.backgroundPosition = xPos+"px " + yPos;
    xPos-=20;
  }
}

function switchImgSrcRight(event) {
  if (event.keyCode === 39) {
    img.src = "images/mario_running.gif";
    img.style.width = "120px";
    console.log("key down")
    document.removeEventListener('keydown', switchImgSrcRight);
  }
}

function stopMovingForward(event) {
  if (event.keyCode === 39) {
    img.src = "images/mario.png";
    img.style.width = "150px";
    document.addEventListener('keydown', switchImgSrcRight);
  }
}

document.addEventListener('keydown', moveBackgroundRight);
document.addEventListener('keydown', switchImgSrcRight);
document.addEventListener('keyup', stopMovingForward);