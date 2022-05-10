let result = document.querySelector('.result');

function getLetter() {
  text = document.getElementById("message").value;
  letters = text.split('');

  result.style.display = "flex";

  for (var i = 0 ; i < letters.length ; i++) {

    if(letters[i] === 'a' || letters[i] === 'A') {
      finalMessage.push(letter_a)
    }
    else if(letters[i] === 'b' || letters[i] === 'B') {
      finalMessage.push(letter_b)
    }
    else if(letters[i] === 'c' || letters[i] === 'C') {
      finalMessage.push(letter_c)
    }
    else if(letters[i] === 'd' || letters[i] === 'D') {
      finalMessage.push(letter_d)
    }
    else if(letters[i] === 'e' || letters[i] === 'E') {
      finalMessage.push(letter_e)
    }
    else if(letters[i] === 'f' || letters[i] === 'F') {
      finalMessage.push(letter_f)
    }
    else if(letters[i] === 'g' || letters[i] === 'G') {
      finalMessage.push(letter_g)
    }
    else if(letters[i] === 'h' || letters[i] === 'H') {
      finalMessage.push(letter_h)
    }
    else if(letters[i] === 'i' || letters[i] === 'I') {
      finalMessage.push(letter_i)
    }
    else if(letters[i] === 'j' || letters[i] === 'J') {
      finalMessage.push(letter_j)
    }
    else if(letters[i] === 'k' || letters[i] === 'K') {
      finalMessage.push(letter_k)
    }
    else if(letters[i] === 'l' || letters[i] === 'L') {
      finalMessage.push(letter_l)
    }
    else if(letters[i] === 'm' || letters[i] === 'M') {
      finalMessage.push(letter_m)
    }
    else if(letters[i] === 'n' || letters[i] === 'N') {
      finalMessage.push(letter_n)
    }
    else if(letters[i] === 'o' || letters[i] === 'O') {
      finalMessage.push(letter_o)
    }
    else if(letters[i] === 'p' || letters[i] === 'P') {
      finalMessage.push(letter_p)
    }
    else if(letters[i] === 'q' || letters[i] === 'Q') {
      finalMessage.push(letter_q)
    }
    else if(letters[i] === 'r' || letters[i] === 'R') {
      finalMessage.push(letter_r)
    }
    else if(letters[i] === 's' || letters[i] === 'S') {
      finalMessage.push(letter_s)
    }
    else if(letters[i] === 't' || letters[i] === 'T') {
      finalMessage.push(letter_t)
    }
    else if(letters[i] === 'u' || letters[i] === 'U') {
      finalMessage.push(letter_u)
    }
    else if(letters[i] === 'w' || letters[i] === 'W') {
      finalMessage.push(letter_w)
    }
    else if(letters[i] === 'x' || letters[i] === 'X') {
      finalMessage.push(letter_x)
    }
    else if(letters[i] === 'y' || letters[i] === 'Y') {
      finalMessage.push(letter_y)
    }
    else if(letters[i] === 'z' || letters[i] === 'Z') {
      finalMessage.push(letter_z)
    }

  }
  lettersCount += ((cols * rectSize) + rectSize) * letters.length;
}