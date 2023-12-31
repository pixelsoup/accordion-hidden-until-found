document.querySelectorAll(".js-accordion").forEach((accordion) => {
  accordion.onbeforematch = () => {
    accordion.classList.remove("collapsed")
  }


  accordion.querySelector(".js-acTrigger").onclick = () => {

    // toggle class collapsed on click
    accordion.classList.toggle("collapsed")

    // define accordion pane dom node
    const details = accordion.querySelector(".js-details")

    // if accordion contains class "collapsed" add value attribute hidden = "until-found"
    if (accordion.classList.contains("collapsed")) {
      details.hidden = "until-found"
    } else {

      // remove attribute hidden
      details.removeAttribute("hidden")
    }
  }
})
