let rectSize = 20;
let text, letters = [];
let cols = 6;
let rows = 10;
let tracking;
let lettersCount = 0;
let finalMessage = []

const shapes = ['rectangle', 'triangle', 'circle'];
let randomShape = null;
const fillShape = { r: 0, g: 0, b: 0};

function setup() {
  let cnv = createCanvas(400, 200);
  cnv.parent('canvas-container');
}

function draw() {
  resizeCanvas(lettersCount, 200, false);
  background('#101010')
  
  tracking = rectSize;
  let x = 0;

  for (let l = 0; l < finalMessage.length; l++) {
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {

        let y = row * rectSize;
        setShape();

        if (finalMessage[l][row][col] === '#') {
          noStroke();
          fill('#1f1f1f');
          rect(x, y, rectSize, rectSize);

          fill(fillShape.r, fillShape.g, fillShape.b);

          if(shapes[randomShape] === 'rectangle') {
            rect(x, y, rectSize, rectSize);
          }
          else if(shapes[randomShape] === 'circle') {
            circle(x+(rectSize/2), y+((rectSize/2)), rectSize, rectSize);
          }
          else if(shapes[randomShape] === 'triangle') {
            triangle(x, y+rectSize, x+(rectSize/2), y, x+rectSize, y+rectSize);
          }
          else {
            noFill();
          }
        }
      }
      x += rectSize;
    }
    x += tracking;
  }
}

function setShape() {
  fillShape.r = random(0,255);
  fillShape.g = random(0,255);
  fillShape.b = random(0,255);
  randomShape = Math.floor(Math.random() * shapes.length);
  noLoop();
}