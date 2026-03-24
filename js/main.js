// Swiper and Flipbook Interactions Functionality

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Flipbook functionality
const flipbook = document.querySelector('.flipbook');

flipbook.addEventListener('click', function() {
  // Add your flipbook interaction logic here
  console.log('Flipbook page flipped!');
});
