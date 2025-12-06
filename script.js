function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Simple slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 6000); // Change slide every 6 seconds
}

showSlides();




function book(serviceName) {
  const phoneNumber = "254799018436"; // YOUR number with country code
  const message = encodeURIComponent(
      `Hello! I would like to book: ${serviceName}\nFrom: Kitengela 3T Business Center`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}


