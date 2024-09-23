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
