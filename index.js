let Second_side=document.querySelector('.second-side');
let First_value=document.querySelector('.first-value');
let Second_value=document.querySelector('.second-value');
let Range=document.querySelector('.range-selector');
let color='black';


function CreateBox(number){
  Second_side.style.gridTemplateColumns = `repeat(${number} ,1fr)`;
  Second_side.style.gridTemplateRows = `repeat(${number} ,1fr)`;
  for (let i=0;i<=number*number ;i++){
    let box = document.createElement("div");
    Second_side.appendChild(box);
    box.addEventListener('mouseover',ChangeBackgroundColor)
  }
}
CreateBox(16);
Range.addEventListener("change",(e)=>{
 First_value.textContent = (e.target.value);
 Second_value.textContent = (e.target.value);
 CreateBox(e.target.value);
})
function ChangeBackgroundColor(){
 if(color === 'black'){
  this.style.backgroundColor='black'
 }
 else if(color === 'white'){
  this.style.backgroundColor = "white"
 }
 else if (color === 'rgb'){
  this.style.backgroundColor = `hsl(${Math.random() * 360},100%, 50%)`
 }
}
function setColor(colorValue){
  color=colorValue
}
function ResetColor(){
  let divColor = document.querySelectorAll('div');
  divColor.forEach((element)=>{
    element.style.backgroundColor= 'white';
  })
}
