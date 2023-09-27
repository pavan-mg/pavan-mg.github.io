/* Add a event listener for Loading... */
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    /* Add Class to hide Loader... */
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
    /* Remove Loaded Class once Page is Loaded... */
      loader.classList.remove("loader");
    });
  });