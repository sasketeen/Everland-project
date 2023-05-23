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
    }

    _collapseSection(element) {
        var sectionHeight = element.scrollHeight;
        var elementTransition = element.style.transition;
        element.style.transition = '';
    
        requestAnimationFrame(function() {
          element.style.height = sectionHeight + 'px';
          element.style.transition = elementTransition;
          
          requestAnimationFrame(function() {
            element.style.height = 0 + 'px';
          });
        });
      }
      
      _expandSection(element) {
        var sectionHeight = element.scrollHeight;
    
        element.style.height = sectionHeight + 'px';
      
        element.addEventListener('transitionend', function(e) {
          element.removeEventListener('transitionend', arguments.callee);
          element.style.height = null;
        });
      }
    

    _setEventListeners() {
        this._element.addEventListener("click", () => {
            if (this._element.classList.contains("accordion_opened")) {
                this._toggle()
                this._collapseSection(this._description)
            } else {
                this._toggle()
                this._expandSection(this._description)
            }
        })
    }

    generate() {
        this._element = this._getElement();
       
        this._header = this._element.querySelector(".accordion__title");
        this._description = this._element.querySelector(".accordion__body");

        this._header.textContent = this._title;
        this._description.textContent = this._text;

        this._setEventListeners();
        
        return this._element;
    }
}

