import "./pages/index.scss";
import {
  menu,
  headerMenuButton,
} from "./utils/constants.js";
import Menu from "./components/Menu.js";
import Slider from "./components/Slider";

const modal = new Menu(menu, headerMenuButton);
modal.setListeners();

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