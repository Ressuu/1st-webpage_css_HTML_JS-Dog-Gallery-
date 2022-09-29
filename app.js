const pieski = document.querySelectorAll(".pieski img");
const POPUP = document.querySelector(".popup");

pieski.forEach((piesek) => {
  piesek.addEventListener("click", () => {
    POPUP.classList.remove("hidden");
  });
});
