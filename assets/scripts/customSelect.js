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
