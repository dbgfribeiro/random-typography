function startDrag(e) {
  // determine event object
  if (!e) {
    var e = window.event;
  }

  var targ = e.target ? e.target : e.srcElement;

  if (targ.id != 'generatedMessage') {return};
    offsetX = e.clientX;
    offsetY = e.clientY;

  // assign default values for top and left properties
  if(!targ.style.left) { targ.style.left='0px'};
  if (!targ.style.top) { targ.style.top='0px'};

  // calculate integer values for top and left 
  // properties
  coordX = parseInt(targ.style.left);
  coordY = parseInt(targ.style.top);
  drag = true;

  // move div element
    document.onmousemove=dragDiv;
  
}
function dragDiv(e) {
  if (!drag) {return};
  if (!e) { var e= window.event};
  var targ=e.target?e.target:e.srcElement;
  // move div element
  targ.style.left=coordX+e.clientX-offsetX+'px';
  targ.style.top=coordY+e.clientY-offsetY+'px';
  return false;
}
function stopDrag() {
  drag=false;
}
window.onload = function() {
  document.onmousedown = startDrag;
  document.onmouseup = stopDrag;
}

let artboard = document.querySelector(".artboard");
let image = document.getElementById("generatedMessage");
function setFinalResult() {
  html2canvas(artboard, { allowTaint: true, imageTimeout: 0 }).then(canvas => {
    document.querySelector(".final-result").appendChild(canvas);
  });
  document.querySelector(".final-result").style.display = "flex";
}

function download() {
  document.querySelector('canvas').toBlob(function(blob){
    link.href = URL.createObjectURL(blob);
    console.log(blob);
    console.log(link.href); // this line should be here
  },'image/png');
}