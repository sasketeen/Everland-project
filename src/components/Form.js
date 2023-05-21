export default class Form {
  constructor(form, handleFormSubmit, listeners) {
    this._handleFormSubmit = handleFormSubmit;
    this._form = form;
    this._inputList = this._form.querySelectorAll('.form__input');
		this._listeners = listeners;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
			if (input.type !== 'radio') {
				this._formValues[input.name] = input.value;
			} else if(input.checked) {
				this._formValues[input.name] = input.value;
			}
    });
    return this._formValues;
  } 

  setEventListeners() {
		if (this._listeners) {
			this._listeners()
		}
		
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
			this._form.reset();
    });
  }
}