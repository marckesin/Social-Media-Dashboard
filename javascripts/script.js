const toggle = document.querySelector(".checkbox");
const background = document.querySelector(".container-main");
const text = document.querySelectorAll(".text");
const text2 = document.querySelectorAll(".text-2");
const dashboard = document.querySelectorAll(".dashboard");

toggle.addEventListener("change", () => {
  background.classList.toggle("container-main-dark");
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
