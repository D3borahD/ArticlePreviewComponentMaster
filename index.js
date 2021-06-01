const btn = document.querySelector("button");
const share = document.querySelector(".invisible");

btn.addEventListener("click", () => {
  btn.classList.toggle("dark");
  share.classList.toggle("invisible");
});
