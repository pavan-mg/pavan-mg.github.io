/* Get all the anchors for Header Menu */
var headerMenu = document.getElementsByClassName('header_menu')[0];
var anchors = headerMenu.getElementsByTagName('a');
/* Loop through the anchors and add a click event listener */
for (var i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", function(event) {
    /* Prevent the default functionality */
    event.preventDefault();
    /* Scroll to the top in a smooth fashion */
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    /* Clear the content of all anchors */
    for (var j = 0; j < anchors.length; j++){
      var pre_href = anchors[j].getAttribute("href");
      var pre_id = pre_href.replace("#", "");
      var pre_div = document.getElementById(pre_id)
      pre_div.style.display = "none";
    }
    /* Display the content of clicked anchor */
    var href = this.getAttribute("href");
    var id = href.replace("#", "");
    var content_div = document.getElementById(id)
    content_div.style.display = "block";
    /* Setting the border height of content desplayed */
    var left_col_div = document.getElementById("left_col")
    if(content_div.clientHeight < left_col_div.clientHeight) {
    content_div.style.height = left_col_div.clientHeight - 20 + 'px';
    }
  });
}