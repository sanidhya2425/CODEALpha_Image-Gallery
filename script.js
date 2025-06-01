const images = [
  'images/natureimg.jpg',
  'images/images arc1.jpeg',
  'images/img 2.jpeg',
  'images/acr 2.jpg'
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById('lightbox-img').src = images[index];
  document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeSlide(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex];
}

function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
