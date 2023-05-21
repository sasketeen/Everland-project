export default class Slider {
  constructor(config) {
    this._section = document.querySelector(config.section);
    this._slider = this._section.querySelector(config.slider);
    this._slides = Array.from(this._slider.querySelectorAll(config.slides));
    this._prevButton = this._section.querySelector(config.prevButton);
    this._nextButton = this._section.querySelector(config.nextButton);

    if (config.counter) {
      this._counter = this._section.querySelector(config.counter);
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

  _updateCurrent() {
    const width = this._slides[this._current].offsetWidth;
    this._slider.style.transform = 'translateX(-' + width * this._current + 'px)';

    this._showSlide(this._slides[this._current]);
    this._updateCounter();
  }

  _gotoPrevSlide() {
    this._hideSlide(this._slides[this._current]);
    const nextSlide = this._current - 1;

    this._current = nextSlide < 0 ? this._total - 1 : nextSlide;

    this._updateCurrent();
  }

  _gotoNextSlide() {
    this._hideSlide(this._slides[this._current]);
    const nextSlide = this._current + 1;

    this._current = nextSlide < this._total ? nextSlide : 0;

    this._updateCurrent();
  }

  init() {
    this._slides.forEach(this._hideSlide.bind(this));
    this._showSlide(this._slides[0]);
    this._updateCounter();

    this._prevButton.addEventListener('click', this._gotoPrevSlide.bind(this));
    this._nextButton.addEventListener('click', this._gotoNextSlide.bind(this));

    window.addEventListener('resize', this._updateCurrent.bind(this));
  }
}
