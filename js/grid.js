let rectSize;
let text, letters = [];
let cols = 6;
let rows = 9;
let tracking;
let lettersCount = 0;
let finalMessage = []

const shapes = ['rectangle', 'triangle', 'circle'];
let randomShape = null;
const palette = [
  '#FEFC45',
  '#49FC3D',
  '#EF1F2A',
  '#0033F9',
]
let selectedColor;

function setup() {
  let cnv = createCanvas(lettersCount-rectSize, rectSize*rows);
  cnv.parent('canvas-container');
}

function draw() {
  if (lettersCount >= windowWidth) {
    rectSize = 10;
  }
  else {
    rectSize = 20;
  }
  resizeCanvas(lettersCount-rectSize, rectSize*rows, false);
  // background('#f00');
  
  tracking = rectSize;
  let x = 0;

  for (let l = 0; l < finalMessage.length; l++) {
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {

        let y = row * rectSize;
        setShape();

        if (finalMessage[l][row][col] === '#') {
          noStroke();
          noFill();
          rect(x, y, rectSize, rectSize);

          selectedColor = palette[Math.floor(Math.random()*palette.length)];
          fill(selectedColor);

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
  randomShape = Math.floor(Math.random() * shapes.length);
  noLoop();
}

function windowResized() {
  if (lettersCount >= windowWidth) {
    rectSize = 10;
  }
  else {
    rectSize = 20;
  }
  resizeCanvas(lettersCount-rectSize, rectSize*rows, false);
}