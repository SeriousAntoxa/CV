let scrolled;
let timer;
const btnUp = document.querySelector(".btn__up");
let nowScroll;
let blockY;

btnUp.addEventListener("click", () => {
  scrolled = window.pageYOffset;
  scrollUp();
});

let scrollUp = () => {
  if (scrolled > 280) {
    window.scrollTo(0, scrolled);
    scrolled = scrolled - 70;
    timer = setTimeout(scrollUp, 10);
  } else if (scrolled > 0) {
    window.scrollTo(0, scrolled);
    scrolled = scrolled - 10;
    timer = setTimeout(scrollUp, 20);
  } else {
    clearTimeout(timer);
    window.scrollTo(0, 0);
  }
};

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    btnUp.classList.add("active");
  } else {
    btnUp.classList.remove("active");
  }
});

const anchors = document.querySelectorAll(`a[href*="#"]`);

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    scrolled = window.pageYOffset;
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    blockY = document.querySelector("" + blockID).getBoundingClientRect().top;
    scrollToAnchor();
  });
});

let scrollToAnchor = () => {
  if (scrolled < blockY - 180) {
    window.scrollTo(0, scrolled);
    scrolled = scrolled + 60;
    timer = setTimeout(scrollToAnchor, 10);
  } else if (scrolled < blockY - 30) {
    window.scrollTo(0, scrolled);
    scrolled = scrolled + 10;
    timer = setTimeout(scrollToAnchor, 20);
  } else {
    clearTimeout(timer);
    window.scrollTo(0, blockY - 30);
  }
};

const menuActives = document.querySelectorAll(".menu__active");
if (menuActives.length > 0) {
  for (let index = 0; index < menuActives.length; index++) {
    const menuActive = menuActives[index];
    menuActive.addEventListener("click", (e) => {
      if (!menuActive.parentElement.classList.contains("active")) {
        menuActive.parentElement.classList.add("active");
      } else {
        menuActive.parentElement.classList.remove("active");
      }
    });
  }
}

const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu != null) {
  iconMenu.addEventListener("click", (e) => {
    document.body.classList.toggle("_scroll");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

const menuLinks = document.querySelectorAll("li > a");
for (let i = 0; menuLinks.length > i; i++) {
  const menuLink = menuLinks[i];
  menuLink.addEventListener("click", (e) => {
    document.body.classList.remove("_scroll");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  });
}
