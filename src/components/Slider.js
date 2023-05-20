export default class Slider {
  constructor(config) {
    this._slider = document.querySelector(config.slider);
    this._slides = Array.from(this._slider.querySelectorAll(config.slides));
    this._prevButton = this._slider.querySelector(config.prevButton);
    this._nextButton = this._slider.querySelector(config.nextButton);

    if (config.counter) {
      this._counter = this._slider.querySelector(config.counter);
    }

    this._total = this._slides.length;
    this._current = 0;
    this._hiddenClass = config.hiddenClass;
  }

  _hideSlide(slide) {
    slide.classList.add(this._hiddenClass);
  }

  _showSlide(slide) {
    slide.classList.remove(this._hiddenClass);
  }

  _updateCounter() {
    if (this._counter) {
      this._counter.textContent = this._current + 1 + '/' + this._total;

      this._prevButton.disabled = this._current === 0;
      this._nextButton.disabled = this._current === this._total - 1;
    }
  }

  _gotoPrevSlide() {
    this._hideSlide(this._slides[this._current]);
    const nextSlide = this._current - 1;

    this._current = nextSlide < 0 ? this._total - 1 : nextSlide;

    this._showSlide(this._slides[this._current]);
    this._updateCounter();
  }

  _gotoNextSlide() {
    this._hideSlide(this._slides[this._current]);
    const nextSlide = this._current + 1;

    this._current = nextSlide < this._total ? nextSlide : 0;

    this._showSlide(this._slides[this._current]);
    this._updateCounter();
  }

  init() {
    this._slides.forEach(this._hideSlide.bind(this));
    this._showSlide(this._slides[0]);
    this._updateCounter();

    this._prevButton.addEventListener('click', this._gotoPrevSlide.bind(this));
    this._nextButton.addEventListener('click', this._gotoNextSlide.bind(this));
  }
}
