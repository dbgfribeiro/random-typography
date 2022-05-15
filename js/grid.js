let rectSize;
let text, letters = [];
let cols = 6;
let rows = 9;
let tracking;
let lettersCount = 0;
let finalMessage = []

const shapes = ['rectangle', 'triangle', 'circle'];
let randomShape = null;
const rgb = ['red' , 'green', 'blue'];
const fillShape = { r: 0, g: 0, b: 0};
let selectedColor;

function setup() {
  let cnv = createCanvas(400, rectSize*rows);
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

          selectedColor = rgb[Math.floor(Math.random()*rgb.length)];

          if (selectedColor === 'red') {
            fill(fillShape.r, 55, 55);
          }
          else if (selectedColor === 'green') {
            fill(55, fillShape.g, 55);
          }
          else if (selectedColor === 'blue') {
            fill(55, 55, fillShape.b);
          }

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
  fillShape.r = random(55,255);
  fillShape.g = random(55,255);
  fillShape.b = random(55,255);
  randomShape = Math.floor(Math.random() * shapes.length);
  noLoop();
}

function setWidth() {
}