/* Sticky header */
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

/* Smooth scroll to blocks */
export function scrollToElement(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    const topPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });

    history.pushState(null, "", target);
  }
}

window.scrollToElement = scrollToElement;

/* Burger menu */
const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav");
const ulItem = document.querySelector(".navbar");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("open");
});

ulItem.addEventListener("click", () => {
  navMenu.classList.remove("open");
  burgerMenu.classList.remove("active");
});

/* Modal */
const clickedPhotos = document.querySelectorAll(".portfolio__photo");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".gallery__img");
const cross = document.querySelector(".modal__cross-container");

clickedPhotos.forEach((photo) => {
  photo.addEventListener("click", () => {
    modalImage.src = photo.querySelector("img").src;
    modal.style.display = "flex";
  });
});

cross.addEventListener("click", () => {
  modal.style.display = "none";
});

/* Bank delay animation */
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
};

const observer = new IntersectionObserver(handleIntersection);

const targetElements = document.querySelectorAll(".bank");

targetElements.forEach((element) => {
  observer.observe(element);
});

/* Custom Select*/
document.addEventListener("DOMContentLoaded", function () {
  const selectElements = document.querySelectorAll(".new-select-element");

  selectElements.forEach(function (select) {
    const selectedOption = select.options[select.selectedIndex];
    const customSelect = document.createElement("div");
    customSelect.className = "new-select";
    customSelect.textContent =
      selectedOption.textContent || select.options[0].textContent;

    const customSelectList = document.createElement("div");
    customSelectList.className = "new-select__list hide";

    Array.from(select.options).forEach(function (option) {
      const optionItem = document.createElement("div");
      optionItem.className = "new-select__item";
      optionItem.textContent = option.textContent;

      if (option.disabled) {
        optionItem.style.color = "grey";
      }

      optionItem.addEventListener("click", function () {
        if (!option.disabled) {
          select.value = option.value;
          customSelect.textContent = option.textContent;
          customSelectList.classList.remove("show");
          customSelectList.classList.add("hide");
        }
      });

      customSelectList.appendChild(optionItem);
    });

    select.style.display = "none";
    select.parentNode.insertBefore(customSelect, select.nextSibling);
    select.parentNode.insertBefore(customSelectList, select.nextSibling);

    customSelect.addEventListener("click", function () {
      if (customSelectList.classList.contains("hide")) {
        customSelectList.classList.remove("hide");
        customSelectList.classList.add("show");
      } else {
        customSelectList.classList.remove("show");
        customSelectList.classList.add("hide");
      }
    });

    document.addEventListener("click", function (e) {
      if (
        !customSelect.contains(e.target) &&
        !customSelectList.contains(e.target)
      ) {
        customSelectList.classList.remove("show");
        customSelectList.classList.add("hide");
      }
    });
  });
});
