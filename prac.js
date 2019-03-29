function setup() {
  createCanvas(window.innerWidth-25, window.innerHeight-45);
  background(250,100,100);
}
var value = 1;
var epil = 0;
var r=255,g=255,b=255;
function changeval(){
  value++;
}

function epi(){
  epil++;
}
function draw() {
  if (epil%2==0){
  r = floor(random(0,255));
  g = floor(random(0,255));
  b = floor(random(0,255));}
  else{r=255,g=255,b=255;}
  fill(r,g,b);
  if (value%2==0)
  noStroke();
  else
    stroke(51);
  if (mouseIsPressed) {
    if (mouseY >= 0){
    if (mouseButton === LEFT) {
      ellipse(mouseX, mouseY, 50, 50);
      }
    }
  }
}

function keyTyped() {
  if (key === ' ') {
    console.log(mouseY);}
  else if (key === 's') {
    value = 1;
  }
  else if (key === 'd') {
    value = 0;
  }
}
