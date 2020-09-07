let acc = document.getElementsByClassName("accordion")
let i
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      let active = document.querySelectorAll(".accordion-div .accordion.active")
      for (let j = 0; j < active.length; j++) {
        active[j].classList.remove("active")
        active[j].nextElementSibling.style.maxHeight = null
      }
      this.classList.toggle("active")
      panel.style.maxHeight = panel.scrollHeight + "px"
    }
  })
}
