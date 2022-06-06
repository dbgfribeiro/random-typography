let result = document.querySelector('.result');
let font = "";

function getLetter() {
  text = document.getElementById("message").value;
  letters = text.split('');

  result.style.display = "flex";

  for (var i = 0 ; i < letters.length ; i++) {

    if(randomType === true) {
      font = allFonts[Math.floor(Math.random()*allFonts.length)];
    }
    else{
      font = selectedFont;
    }

    if(letters[i] === 'a' || letters[i] === 'A') {
      finalMessage.push(fonts[font].a)
    }
    else if(letters[i] === 'b' || letters[i] === 'B') {
      finalMessage.push(fonts[font].b)
    }
    else if(letters[i] === 'c' || letters[i] === 'C') {
      finalMessage.push(fonts[font].c)
    }
    else if(letters[i] === 'd' || letters[i] === 'D') {
      finalMessage.push(fonts[font].d)
    }
    else if(letters[i] === 'e' || letters[i] === 'E') {
      finalMessage.push(fonts[font].e)
    }
    else if(letters[i] === 'f' || letters[i] === 'F') {
      finalMessage.push(fonts[font].f)
    }
    else if(letters[i] === 'g' || letters[i] === 'G') {
      finalMessage.push(fonts[font].g)
    }
    else if(letters[i] === 'h' || letters[i] === 'H') {
      finalMessage.push(fonts[font].h)
    }
    else if(letters[i] === 'i' || letters[i] === 'I') {
      finalMessage.push(fonts[font].i)
    }
    else if(letters[i] === 'j' || letters[i] === 'J') {
      finalMessage.push(fonts[font].j)
    }
    else if(letters[i] === 'k' || letters[i] === 'K') {
      finalMessage.push(fonts[font].k)
    }
    else if(letters[i] === 'l' || letters[i] === 'L') {
      finalMessage.push(fonts[font].l)
    }
    else if(letters[i] === 'm' || letters[i] === 'M') {
      finalMessage.push(fonts[font].m)
    }
    else if(letters[i] === 'n' || letters[i] === 'N') {
      finalMessage.push(fonts[font].n)
    }
    else if(letters[i] === 'o' || letters[i] === 'O') {
      finalMessage.push(fonts[font].o)
    }
    else if(letters[i] === 'p' || letters[i] === 'P') {
      finalMessage.push(fonts[font].p)
    }
    else if(letters[i] === 'q' || letters[i] === 'Q') {
      finalMessage.push(fonts[font].q)
    }
    else if(letters[i] === 'r' || letters[i] === 'R') {
      finalMessage.push(fonts[font].r)
    }
    else if(letters[i] === 's' || letters[i] === 'S') {
      finalMessage.push(fonts[font].s)
    }
    else if(letters[i] === 't' || letters[i] === 'T') {
      finalMessage.push(fonts[font].t)
    }
    else if(letters[i] === 'u' || letters[i] === 'U') {
      finalMessage.push(fonts[font].u)
    }
    else if(letters[i] === 'v' || letters[i] === 'V') {
      finalMessage.push(fonts[font].v)
    }
    else if(letters[i] === 'w' || letters[i] === 'W') {
      finalMessage.push(fonts[font].w)
    }
    else if(letters[i] === 'x' || letters[i] === 'X') {
      finalMessage.push(fonts[font].x)
    }
    else if(letters[i] === 'y' || letters[i] === 'Y') {
      finalMessage.push(fonts[font].y)
    }
    else if(letters[i] === 'z' || letters[i] === 'Z') {
      finalMessage.push(fonts[font].z)
    }

  }
  lettersCount += ((cols * rectSize) + rectSize) * letters.length;
}