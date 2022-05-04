function getLetter() {
  text = document.getElementById("message").value;
  letters = text.split('');
  //console.log(letters);
  
  for (var i = 0 ; i < letters.length ; i++) {
    if(letters[i] === 'a' || letters[i] === 'A') {
      selectedLetter = letterA;
    }
    else if(letters[i] === 'b' || letters[i] === 'B') {
      selectedLetter = letterB;
    }
    else if(letters[i] === 'c' || letters[i] === 'C') {
      selectedLetter = letterC;
    }
  }
  
  lettersCount += 120*letters.length;
  console.log(lettersCount);
}

function clearText() {
  lettersCount = 0;
}