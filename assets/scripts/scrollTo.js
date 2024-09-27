function scrollToElement(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    const topPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
      top: topPosition,
      behavior: "smooth"
    });

    history.pushState(null, "", target);
  }
}

scrollToElement("#request")
