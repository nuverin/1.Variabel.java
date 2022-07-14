// modal system
const modals = document.querySelectorAll(".modal");
const btns = document.getElementsByClassName("btn-open");
const close = document.querySelectorAll(".btn-cancel");

// for (var i = 0; i < btns.length; i++) {
//   btns[i].onclick = (e) => {
//     e.preventDefault();
//     modals.classList.add("active");
//   };
// }
// for (var i = 0; i < close.length; i++) {
//   close[i].onclick = (e) => {
//     modals.classList.remove("active");
//   };
// }

// open modal click
[...btns].forEach((btn, s) => {
  btn.addEventListener("click", () => {
    modals[s].classList.add("active");
  });
});
// close modal if you click cancel
[...close].forEach((close, ex) => {
  close.addEventListener("click", () => {
    modals[ex].classList.remove("active");
  });
});

// when user click windows close
window.onclick = (event) => {
  if (event.target === modals) {
    modals.classList.remove("active");
  }
};
