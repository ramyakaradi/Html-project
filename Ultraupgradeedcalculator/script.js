 function appendValue(value){
  document.getElementById('result').value+= value;
  changeButtonColors();
}
function clearResult() {
  document.getElementById('result').value = '';
   changeButtonColors();
}

function calculateResult() {
  let resultBox = document.getElementById('result');
  let expression=resultBox.value;
  try {
   resultBox.value=eval(expression);
   flashDisplay();

}
catch{
    resultBox.value="Error";
    flashDisplay();
}
changeButtonColors();
}

function changeButtonColors(){
    let buttons =document.querySelectorAll("button");
    buttons.forEach(button =>{
        button.style.background= getRandomColor();

    });
}
function getRandomColor(){
    return "#" +Math.floor(Math.random() *16777215 ).toString(16);

}

function flashDisplay()
{
   let resultBox =document.getElementById('result');
   resultBox.classList.add('flash');
   setTimeout(()  =>resultBox.classList.remove('flash'),200);
}