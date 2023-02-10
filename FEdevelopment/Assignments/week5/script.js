const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const sectionId = this.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
