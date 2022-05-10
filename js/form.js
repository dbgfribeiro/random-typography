let result = document.querySelector('.result');

function getLetter() {
  text = document.getElementById("message").value;
  letters = text.split('');
  
  clearText();
  result.style.display = "flex";

  for (var i = 0 ; i < letters.length ; i++) {

    if(letters[i] === 'a' || letters[i] === 'A') {
      finalMessage.push(a)
    }
    else if(letters[i] === 'b' || letters[i] === 'B') {
      finalMessage.push(b)
    }
    else if(letters[i] === 'c' || letters[i] === 'C') {
      finalMessage.push(c)
    }
    else if(letters[i] === 'd' || letters[i] === 'D') {
      finalMessage.push(d)
    }
    else if(letters[i] === 'e' || letters[i] === 'D') {
      finalMessage.push(e)
    }
    else if(letters[i] === 'f' || letters[i] === 'F') {
      finalMessage.push(f)
    }
    else if(letters[i] === 'g' || letters[i] === 'G') {
      finalMessage.push(g)
    }
    else if(letters[i] === 'h' || letters[i] === 'H') {
      finalMessage.push(h)
    }
    else if(letters[i] === 'i' || letters[i] === 'I') {
      finalMessage.push(i)
    }
    else if(letters[i] === 'j' || letters[i] === 'J') {
      finalMessage.push(j)
    }
    else if(letters[i] === 'k' || letters[i] === 'K') {
      finalMessage.push(k)
    }
    else if(letters[i] === 'l' || letters[i] === 'L') {
      finalMessage.push(l)
    }
    else if(letters[i] === 'm' || letters[i] === 'M') {
      finalMessage.push(m)
    }
    else if(letters[i] === 'n' || letters[i] === 'N') {
      finalMessage.push(n)
    }
    else if(letters[i] === 'o' || letters[i] === 'O') {
      finalMessage.push(o)
    }
    else if(letters[i] === 'p' || letters[i] === 'P') {
      finalMessage.push(p)
    }
    else if(letters[i] === 'q' || letters[i] === 'Q') {
      finalMessage.push(q)
    }
    else if(letters[i] === 'r' || letters[i] === 'R') {
      finalMessage.push(r)
    }
    else if(letters[i] === 's' || letters[i] === 'S') {
      finalMessage.push(s)
    }
    else if(letters[i] === 't' || letters[i] === 'T') {
      finalMessage.push(t)
    }
    else if(letters[i] === 'u' || letters[i] === 'U') {
      finalMessage.push(u)
    }
    else if(letters[i] === 'w' || letters[i] === 'W') {
      finalMessage.push(w)
    }
    else if(letters[i] === 'x' || letters[i] === 'X') {
      finalMessage.push(x)
    }
    else if(letters[i] === 'y' || letters[i] === 'Y') {
      finalMessage.push(y)
    }
    else if(letters[i] === 'z' || letters[i] === 'Z') {
      finalMessage.push(z)
    }

  }
  lettersCount += ((cols * rectSize) + rectSize) * letters.length;
}

function clearText() {
  lettersCount = 0;
  text = 0;
  finalMessage = [];
  result.style.display = "none";
}