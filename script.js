let currentIndex = 0;

function moveCarousel(direction) {
    const testimonials = document.querySelector('.testimonial-carousel');
    const totalTestimonials = document.querySelectorAll('.testimonial').length;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalTestimonials - 1;
    } else if (currentIndex >= totalTestimonials) {
        currentIndex = 0;
    }

    testimonials.style.transform = `translateX(-${currentIndex * 100}%)`;
}
