export const addEventOnElements = (elements, eventType, callback) => {
    elements.forEach(element => {
      element.addEventListener(eventType, callback);
    });
  };
  
  export const initSlider = (slider) => {
    const sliderContainer = slider.querySelector("[data-slider-container]");
    const sliderPrevBtn = slider.querySelector("[data-slider-prev]");
    const sliderNextBtn = slider.querySelector("[data-slider-next]");
  
    let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
    let currentSlidePos = 0;
  
    const moveSliderItem = () => {
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    };
  
    const slideNext = () => {
      currentSlidePos = (currentSlidePos >= totalSlidableItems) ? 0 : currentSlidePos + 1;
      moveSliderItem();
    };
  
    const slidePrev = () => {
      currentSlidePos = (currentSlidePos <= 0) ? totalSlidableItems : currentSlidePos - 1;
      moveSliderItem();
    };
  
    sliderNextBtn.addEventListener("click", slideNext);
    sliderPrevBtn.addEventListener("click", slidePrev);
  
    if (totalSlidableItems <= 0) {
      sliderNextBtn.style.display = 'none';
      sliderPrevBtn.style.display = 'none';
    }
  
    window.addEventListener("resize", () => {
      totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
      totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
      moveSliderItem();
    });
  };