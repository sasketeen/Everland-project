import "./pages/index.scss";
import Slider from "./components/Slider";

const introSlider = new Slider({
  slider: '.intro',
  slides: '.intro__slider-item',
  prevButton: '.slider-button_direction_left',
  nextButton: '.slider-button_direction_right',
  counter: '.intro__counter',
  hiddenClass: 'slider-hidden'
});

const specProjectsSlider = new Slider({
  slider: '.spec-projects',
  slides: '.spec-projects__slider-item',
  prevButton: '.slider-button_direction_left',
  nextButton: '.slider-button_direction_right',
  hiddenClass: 'slider-hidden'
});

introSlider.init();
specProjectsSlider.init();
