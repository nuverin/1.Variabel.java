const close = document.querySelector("[data-dismiss]");
const sidebar = document.querySelector("#sidebar");
const btn = document.querySelector(".btn_open");

btn.addEventListener("click", () => {
  sidebar.classList.add("width");
});
console.log(sidebar);
close.addEventListener("click", () => {
  sidebar.classList.remove("width");
});
window.onclick = (es) => {
  const item = es.target;
  if (item.classList.contains("width")) {
    sidebar.classList.remove("width");
  }
};
