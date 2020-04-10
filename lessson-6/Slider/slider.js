'use strict';

const slider = document.querySelector('.slider');

let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

window.addEventListener('load', function() {
    loadIcon.style.display = 'none';
    leftArrow.addEventListener('click', function(){
        images.setNextLeftImage();
    });
    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });
    images.init()
});

let images = {
    currentIndex: 0,
    slides: [],
    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIndex();
    },
    showImageWithCurrentIndex() {
        this.slides[this.currentIndex].classList.remove('hidden');
    },
    setNextLeftImage() {
        this.HideVisibleImage();
        if (this.currentIndex == 0) {
            this.currentIndex = this.slides.length - 1;
        } else {
            this.currentIndex--;
        }
        const currentSlide = this.slides[this.currentIndex];
        currentSlide.classList.remove('hidden')
        currentSlide.classList.add('slide-in-fwd-right');
        setTimeout(function () {
            currentSlide.classList.remove('slide-in-fwd-right');
        }, 700)
        //this.showImageWithCurrentIndex();
    },
    setNextRightImage(){
        this.HideVisibleImage();
        if (this.currentIndex == this.slides.length - 1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        const currentSlide = this.slides[this.currentIndex];
        currentSlide.classList.remove('hidden')
        currentSlide.classList.add('slide-in-fwd-left');
        setTimeout(function () {
            currentSlide.classList.remove('slide-in-fwd-left');
        }, 700)
        // this.showImageWithCurrentIndex();
    },

    HideVisibleImage() {
        this.slides.forEach(function (slide) {
            if (!slide.classList.contains('hidden')) {
                slide.classList.add('hidden')
            }
        });
    }
};