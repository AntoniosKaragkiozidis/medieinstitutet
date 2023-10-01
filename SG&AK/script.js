let isColorChanged = false;

function toggleBackgroundColor() {
  if (!isColorChanged) {
    document.body.style.backgroundColor = 'black';
    isColorChanged = true;
   
  }
  else {
    document.body.style.backgroundColor = '#090B29';
    isColorChanged = false;
  }
}