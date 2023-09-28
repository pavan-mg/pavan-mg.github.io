/* Add a event listener for Loading... */
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    /* Add Class to hide Loader... */
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
    /* Remove Loaded Class once Page is Loaded... */
      loader.classList.remove("loader");
    });
    /* Setting the border height of content desplayed */
    var content_div = document.getElementById("Home")
    var left_col_div = document.getElementById("left_col")
    if(content_div.clientHeight < left_col_div.clientHeight) {
    content_div.style.height = left_col_div.clientHeight - 20 +'px';
    }
  });