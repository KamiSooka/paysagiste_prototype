const testimonials = document.querySelectorAll('.testimonial');
  let index = 0;

  function showTestimonial(i) {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[i].classList.add('active');
  }

  document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  });

  document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  });

  // Auto défilement toutes les 5 secondes
  setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }, 5000);

