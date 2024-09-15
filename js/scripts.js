document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  navbarToggler.addEventListener("click", function () {
    const icon = document.querySelector(".navbar-toggler-icon");
    icon.classList.toggle("rotate");
  });

  // Si la navbar se ferme en cliquant à côté, on remet l'icône à sa position initiale
  navbarCollapse.addEventListener("hidden.bs.collapse", function () {
    const icon = document.querySelector(".navbar-toggler-icon");
    icon.classList.remove("rotate");
  });
});

AOS.init();
