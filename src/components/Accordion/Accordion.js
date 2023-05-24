export default class Accordion {
    constructor(selector, { title, body }) {
        this._selector = selector;
        this._title = title;
        this._text = body;
    }

    _getElement() {
        const cardElement = document
            .querySelector(this._selector)
            .content.querySelector(".accordion")
            .cloneNode(true);

        return cardElement;
    }

    _toggle() {
        this._element.classList.toggle("accordion_opened");
        this._button.classList.toggle("accordion__button_opened");
        this._description.classList.toggle("accordion__body_opened");
    }

    _setEventListeners() {
        this._element.addEventListener("click", () => {
            this._toggle()
        })
    }

    generate() {
        this._element = this._getElement();
       
        this._header = this._element.querySelector(".accordion__title");
        this._description = this._element.querySelector(".accordion__body");
        this._button = this._element.querySelector(".accordion__button");
        console.log(this._button)

        this._header.textContent = this._title;
        this._description.textContent = this._text;

        this._setEventListeners();
        
        return this._element;
    }
}