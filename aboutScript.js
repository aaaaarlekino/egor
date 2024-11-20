const wrapperBurger = document.querySelector(".wrapper-burger")
const burger = document.querySelector(".burger")
burger.addEventListener("click", ()=>{
  wrapperBurger.style.display =  "block"
  burger.style.display =  "none"
})
const burgerClous =  document.getElementById("burger-clous")
burgerClous.addEventListener("click", ()=>{
  wrapperBurger.style.display =  "none"
  burger.style.display =  "block"
})
