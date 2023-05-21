import "./pages/index.scss";
import Slider from "./components/Slider";

const introSlider = new Slider({
  section: '.intro',
  slider: '.intro__slider-list',
  slides: '.intro__slider-item',
  prevButton: '.slider-button_direction_left',
  nextButton: '.slider-button_direction_right',
  counter: '.intro__counter',
  hiddenClass: 'slider-hidden'
});

const specProjectsSlider = new Slider({
  section: '.spec-projects',
  slider: '.spec-projects__slider-list',
  slides: '.spec-projects__slider-item',
  prevButton: '.slider-button_direction_left',
  nextButton: '.slider-button_direction_right',
  hiddenClass: 'slider-hidden'
});

introSlider.init();
specProjectsSlider.init();
