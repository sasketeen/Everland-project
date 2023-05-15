export default class Accardion {
    constructor(selector, { title, body }) {
        this._selector = selector;
        this._title = title;
        this._text = body;
    }

    _getElement() {
        const cardElement = document
            .querySelector(this._selector)
            .content.querySelector(".accardion")
            .cloneNode(true);

        return cardElement;
    }

    _toggleOpenClose() {
        this._element.classList.toggle("accardion_opened");
    }

    _setEventListeners() {
        this._top.addEventListener("click", () => {
            this._toggleOpenClose()
        })
    }

    generate() {
        this._element = this._getElement();
       
        this._header = this._element.querySelector(".accardion__title");
        this._description = this._element.querySelector(".accardion__body");
        this._top = this._element.querySelector(".accardion__header")

        this._header.textContent = this._title;
        this._description.textContent = this._text;

        this._setEventListeners();
        
        return this._element;
    }
}