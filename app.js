var buttonClickSlide = document.querySelector(".next-button")
var buttonClickSlideBack = document.querySelector(".back-button")
buttonClickSlide.addEventListener('click',function handleSlide() {
    let lists = document.querySelectorAll('.item-slide')
    document.getElementById('slide').appendChild(lists[0])
})
buttonClickSlideBack.addEventListener('click',function handleSlide() {
    let lists = document.querySelectorAll('.item-slide')
    document.getElementById('slide').prepend(lists[lists.length - 1])
})
const headerMenuMobile = document.querySelector('.header-menu-mobile');
const headerNavOverlay = document.querySelector('.header-nav-overlay');
const headerNavMob = document.querySelector('.header-nav-mobile')
headerNavMob.addEventListener('click',function(e) {
    e.stopPropagation
})
headerMenuMobile.addEventListener('click', function() {
  headerNavOverlay.style.display = 'block';
});
headerNavOverlay.addEventListener('click',function() {
    headerNavOverlay.style.display = 'none';
})



const sliderImages = document.querySelectorAll('.slider-img');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0;
let interval;

// Hide all slider images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Show current slide
function startSlide() {
  reset();
  sliderImages[currentSlide].style.display = 'block';
}

// Show next slide
function slideRight() {
  reset();
  currentSlide = currentSlide === sliderImages.length - 1 ? 0 : currentSlide + 1;
  sliderImages[currentSlide].style.display = 'block';
}

// Show dot for current slide
function showDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < sliderImages.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentSlide) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', function() {
      currentSlide = i;
      startSlide();
      showDots();
      clearInterval(interval);
      autoSlide();
    });
    dotsContainer.appendChild(dot);
  }

}

startSlide();
showDots();
