let buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
// console.log(buttons)
buttons.forEach((button)=>{button.addEventListener("click",function(e){
  console.log(e.target)
  let color = e.target.id
  if(color){
    body.style.backgroundColor=color
  }
})})