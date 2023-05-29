const cardControllers = document.querySelectorAll("[data-card-controller]");
const cardFront = document.querySelector("[data-card='front']");
const cardBack = document.querySelector("[data-card='back']");
const {log} = console;

cardControllers.forEach(controller => {
  controller.addEventListener("click", (e) => {
    const card = e.currentTarget.parentElement.parentElement;
    const isVisible = card.dataset.visible;

    if (isVisible === "false") {
      card.setAttribute("data-visible", true);
      log("changed");
    } else {
      card.setAttribute("data-visible", false);
    }
  })
})
