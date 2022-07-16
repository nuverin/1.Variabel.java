const accord = document.querySelectorAll(".accordion__header");

accord.forEach((acc) => {
  acc.addEventListener("click", (ev) => {
    acc.classList.toggle("active");

    const elem = acc.nextElementSibling;
    if (acc.classList.contains("active")) {
      elem.style.maxheight = elem.scrollHeight + "px";
    } else {
      elem.style.maxheight = "0";
    }
  });
});
