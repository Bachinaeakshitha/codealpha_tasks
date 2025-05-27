const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg'
  ];
  
  let currentIndex = 0;
  
  function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightbox').style.display = 'flex';
    showImage();
  }
  
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }
  
  function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    showImage();
  }
  
  function showImage() {
    document.getElementById('lightbox-img').src = images[currentIndex];
  }
  