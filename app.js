const section = document.querySelectorAll("section");
const heading = document.querySelector(".heading");
const sidebar__item = document.querySelectorAll(".sidebar__item");

// console.log(heading);
// class for creating new cars
// class car {
//   constructor(range, speed, price) {
//     this.range = range;
//     this.speed = speed;
//     this.price = price;
//   }
// }
// let my = "pankaj-kumar";
// console.log(my.replace("-", " "));
// // car data //////
// const Model = new car(348, 3.8, 670);
// console.log(Model);

const callback = function (event, observer) {
  const entry = event[0];
  if (!entry.isIntersecting) return;

  heading.textContent = entry.target.id;
};
const observer = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.3,
});

section.forEach((e) => {
  observer.observe(e);
});
