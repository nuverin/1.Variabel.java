document.querySelector("#modals").addEventListener("click", (e) => {
  let es = e.target.dataset.change;
  if (es) {
    const btn = document.querySelectorAll(".btn-open");
    [...btn].forEach((elem) => {
      elem.addEventListener("click", () => {
        document.querySelector(".modal").classList.add("active");
      });
      document.querySelector(".btn-close").addEventListener("click", () => {
        document.querySelector(".modal").classList.remove("active");
      });
    });
    document.getElementById(es).classList.add("active");
  }
});
document.querySelector(".btn-cancel").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("active");
});
