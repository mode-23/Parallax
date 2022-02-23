let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountainOne = document.getElementById("mountain1");
let mountainTwo = document.getElementById("mountain2");
let text = document.querySelector(".text");
// let headerTwo = document.querySelector(".header-aside");

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 3 + "px";
    mountainOne.style.top = value * 0.9 + "px";
    mountainTwo.style.top = value * 0.15 + "px";
    text.style.top = value + "px";

    if(value >= 135){
    document.querySelector(".main").style.background = "linear-gradient(#5c1d30, #18081c)";
    }else{
    document.querySelector(".main").style.background = "linear-gradient( #f56040 , #f77737 , #fcaf45 , #ffdc80)";
    }
}

let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let logo = document.querySelector(".logo");


toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
    logo.classList.toggle("away");

});


let switcher = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".gallery-holder .box-con");

switcher.forEach((li) =>{
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImg);
});

function removeActive(){
  switcher.forEach((li) =>{
    li.classList.remove("active");
    this.classList.add("active");
  })
}

function manageImg() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.web).forEach((el) => {
    el.style.display = "block";
  })
}
