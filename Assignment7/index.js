const navbar = document.querySelector("nav");
const menuBtn = document.createElement("button");
menuBtn.innerHTML = "Menu";
menuBtn.classList.add("menu-btn");
document.body.prepend(menuBtn);
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navbar.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navbar.classList.remove("open");
    menuOpen = false;
  }
});

