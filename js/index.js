alert('活動已結束')
document.body.innerHTML = ``
document.body.style.background = '#000'

const getNumber = document.querySelector(".getNumber");
const paper = document.querySelector(".paper");

let tl = gsap.timeline();

getNumber.addEventListener("click", function () {
  this.classList.add("active");
  tl.to(".paper", {
    height: "100%",
    rotateX: 0,
    duration: 1.5,
  });
  tl.to(".paper", {
    zIndex: 9,
    top: "25%",
    scale: 1.3,
    duration: 0.5,
  });
});
