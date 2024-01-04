let Second_side=document.querySelector('.second-side');

let Range=document.querySelector('.range-selector');
let First_value=document.querySelector('.first-value');
let Second_value=document.querySelector('.second-value')
Range.addEventListener('click',(e)=>{
  First_value.textContent=e.target.value;
  Second_value.textContent=e.target.value;
});


function CreateBoxes(number){
  Second_side.style.gridTemplateColumns = "repeat(16, 1fr)";
Second_side.style.gridTemplateRows = 'repeat(16, 1fr)';
  let num=number*number;
  for (let i = 0;i<=num;i++){
    let box = document.createElement('div');
    Second_side.appendChild(box).className("box");
  }
}
CreateBoxes(64);
