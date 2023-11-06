let pagSpans = document.querySelectorAll(".pagSpan");
console.log(pagSpans);
pagSpans.forEach((e) => {
  e.addEventListener("click", () => {
    pagSpans.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});
