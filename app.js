document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselSlide = document.querySelector('.carousel-slide');
    const slideWidth = document.querySelector('.carousel-slide img').clientWidth;
    let index = 0;

    nextButton.addEventListener('click', () => {
        if (index < carouselSlide.children.length - 1) {
            index++;
            carouselSlide.style.transform = `translateX(${-index * slideWidth}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            carouselSlide.style.transform = `translateX(${-index * slideWidth}px)`;
        }
    });
});