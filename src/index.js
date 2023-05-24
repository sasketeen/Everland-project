import "./pages/index.scss"
import {
  menu,
  headerMenuButton, 
  donateForm, 
  charityForm, 
  amountInputs, 
  hiddenTextInput,
} from "./utils/constants.js";
import Menu from "./components/Menu.js";
import Slider from "./components/Slider";
import Accordion from "./components/Accordion/Accordion"
import Form from "./components/Form";

const modal = new Menu(menu, headerMenuButton);
modal.setListeners();

const accordionColumLeft = document.querySelector(".accordions__column-left");
const accordionColumRight = document.querySelector(".accordions__column-right");

const arr = [
    {
      "title": "Заработанные средства",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "title": "Крупные клиенты",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "title": "Инклюзивность",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "title": "Свои исследования",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "title": "Использование Digital",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      "title": "Большой опыт",
      "body": "За время сущетсования проекта с 2016 года социальная предпринимательская модель Everland доказала свою эффективность  - мы действительно умеем давать работу людям с разными видами инвалидности"
    },
]


const renderAccordion = (() => {
  arr.forEach((element, index) => {
    const accordion = new Accordion('.accordion-template', element);
    const accordionElement = accordion.generate();
    if(index%2 === 0) {
      accordionColumLeft.append(accordionElement);
    } else {
      accordionColumRight.append(accordionElement);
    }
})
})

renderAccordion();

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


const donateFormElement = new Form(donateForm, donateFormSubmit, donateFormListeners);
donateFormElement.setEventListeners();

const charityFormElement = new Form(charityForm, charityFormSubmit);
charityFormElement.setEventListeners();

function donateFormSubmit(inputValues) {
	console.log(inputValues)
}

function donateFormListeners() {
	amountInputs.forEach(item => {
		item.addEventListener('click', (evt) => {
			toggleSumInputVisibility(evt.target)
		})
	})
}

function charityFormSubmit(inputValues) {
	amountInputs.forEach(item => {
		if (inputValues.sum === item.value) {
			item.checked = true;
			toggleSumInputVisibility(item);
		}
    donateForm.scrollIntoView();
    item.focus();
	})
}

function toggleSumInputVisibility(item) {
	if (item.value === 'other') {
		hiddenTextInput.classList.remove('form__input_type_text-hidden');
		hiddenTextInput.required = true;
	} else {
		hiddenTextInput.classList.add('form__input_type_text-hidden');
		hiddenTextInput.required = false;
	}
}





introSlider.init();
specProjectsSlider.init();