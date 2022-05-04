let rectSize = 20;
let input, button, greeting, text, letters;
let selectedLetter = base;
let lettersCount = 0;

function setup() {
  let cnv = createCanvas(120, 200);
  background('#1f1f1f');
  cnv.parent('canvas-container');
}

function draw() {
 resizeCanvas(lettersCount, 200, false);
  background('#1f1f1f');
  
  for (let i = 0; i < base.length; i++) {
    for (let j = 0; j < base[i].length; j++) {
      let x = j * rectSize;
      let y = i * rectSize;
      
      if (selectedLetter[i][j] === '#') {
        stroke('#ebebeb');  
        fill(random(255), random(50), random(0));
      }else{
        noStroke();
        noFill();
      }
      
      rect(x, y, rectSize, rectSize);
    }
  }
}