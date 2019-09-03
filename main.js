const navSlide = () => {
    const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach((link, index) => {
     link.style.animation = `navbarAnimate 0.5s ease-in ${index / 7 +2}`;
     console.log(index);
  });  

}

navSlide();