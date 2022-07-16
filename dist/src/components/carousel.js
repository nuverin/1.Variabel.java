document.querySelectorAll(".carousel").forEach((car) => {
  const items = car.querySelectorAll(".carousel__item");
  const button = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });
  car.insertAdjacentHTML(
    "beforeend",
    `
    <div class="carousel__nav">
    ${button.join("")}
    </div>
  `
  );
  const buttons = car.querySelectorAll(".carousel__button");
  buttons.forEach((butn, s) => {
    butn.addEventListener("click", () => {
      items.forEach((item) => item.classList.remove("carousel__item-selected"));
      buttons.forEach((butt) =>
        butt.classList.remove("carousel__button-selected")
      );
      // selected frist carousel
      items[s].classList.add("carousel__item-selected");
      butn.classList.add("carousel__button-selected");
    });
  });
});
