const toggle = document.querySelector(".checkbox");
const background = document.querySelector("body");
const pattern = document.querySelector(".pattern");
const text = document.querySelectorAll(".text");
const text2 = document.querySelectorAll(".text-2");
const dashboard = document.querySelectorAll(".dashboard");

const slider = document.querySelector(".slider");

toggle.addEventListener("change", () => {
  background.classList.toggle("background-dark");
  pattern.classList.toggle("background-dark-1");
  slider.classList.toggle("slider-dark");
  text.forEach(item => {
    item.classList.toggle("text-dark");
  });
  text2.forEach(item => {
    item.classList.toggle("text-2-dark");
  });
  dashboard.forEach(item => {
    item.classList.toggle("dashboard-dark");
  });
});
