const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const line = document.querySelector(".line");
const line2 = document.querySelector(".line2");
let firstHeight = first.offsetHeight;
let secondHeight = second.offsetHeight;
let thirdHeight = third.offsetHeight;

console.log(firstHeight);
console.log(secondHeight);
console.log(thirdHeight);

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  console.log(scroll);
  // let secondY = second.getBoundingClientRect();
  // console.log(secondY.top);
  line.style.width = `${scroll * 0.1}%`;
  first.style.transform = `scale(${1 - scroll / 1000})`;
  first.style.opacity = `${1 - scroll / 1000}`;
  if (scroll >= firstHeight) {
    second.style.position = "fixed";
    second.style.transform = `translateY(0vh)`;
    third.style.transform = `translateY(200vh)`;
    second.style.transform = `scale(${1 - (scroll - firstHeight) / 1000})`;
    second.style.opacity = `${1 - (scroll - firstHeight) / 1000}`;
    line2.style.width = `${(scroll - firstHeight) * 0.1}%`;
  } else {
    second.style.position = "static";
    second.style.transform = `translateY(100vh)`;
    third.style.transform = `translateY(100vh)`;
    second.style.opacity = 1;
  }
});
