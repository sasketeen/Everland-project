import "./pages/index.scss"
import Form from "./components/Form";
import { donateForm, charityForm, amountInputs, hiddenTextInput } from "./utils/constants";


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




