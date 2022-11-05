const sociauxs = document.querySelector(".name");
const share = document.querySelector(".share");

sociauxs.addEventListener("click", () => {
  console.log(sociauxs);
  share.classList.toggle("active");
});
