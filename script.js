// // Custom JavaScript for NGO Website

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
})
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#web"]')
  const bootstrap = window.bootstrap // Declare the bootstrap variable

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80 // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })

        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse")
        if (navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse)
          bsCollapse.hide()
        }
      }
    })
  })
        //Use gsap for cursur
var home = document.querySelector("#web");
var cursur = document.querySelector("#cursur");
home.addEventListener("mousemove", function(dets){
    gsap.to(cursur,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out"
    })
    
})
