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
  }
  lettersCount += ((cols * rectSize) + rectSize) * letters.length;
}

function clearText() {
  lettersCount = 0;
  text = 0;
  finalMessage = [];
  result.style.display = "none";
}