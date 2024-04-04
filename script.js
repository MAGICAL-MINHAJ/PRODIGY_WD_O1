document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var navLinks = navbar.getElementsByTagName("a");
  
    // Change color of menu item on hover
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("mouseover", function() {
        this.style.color = "orange";
      });
      navLinks[i].addEventListener("mouseout", function() {
        this.style.color = "#fff";
      });
    }
  
    // Change background color of menu on scroll
    window.addEventListener("scroll", function() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#222";
      } else {
        navbar.style.backgroundColor = "#333";
      }
    });
  });
  