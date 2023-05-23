export default class Menu {
  constructor(menu, headerMenuButton) {
    this._menu = menu;
    this._headerMenuButton = headerMenuButton;
    this._menuVector = document.querySelector('.header__menu-vector');
    this._listMenuButton = this._menu.querySelectorAll('.menu__list-button');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._menuOpened = false;
  }
  
  _openModal() {
    this._menu.classList.add('menu_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._menuVector.classList.add('header__menu-vector_opened');
    this._menuOpened = true;
    document.body.style.overflow = 'hidden';
  }
  
  _closeModal() {
    this._menu.classList.remove('menu_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._menuVector.classList.remove('header__menu-vector_opened');
    this._menuOpened = false;
    document.body.style.overflow = 'auto';
    this._closeList();
  }
  
  toggleModal() {
    if (this._menuOpened) {
      this._closeModal();
    } else {
      this._openModal();
    }
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this._closeModal();
    }
  }

  setListeners() {
    this._headerMenuButton.addEventListener('click', () => {
      this.toggleModal()
    })

    this._headerMenuButton.addEventListener('mouseenter', () => {
      this._openModal()
    })

    this._listMenuButton.forEach(item => {
      item.addEventListener('click', evt => {
        if (!evt.currentTarget.nextElementSibling.classList.contains('menu__list_opened')) {
          this._closeList()
        }
        evt.currentTarget.nextElementSibling.classList.toggle('menu__list_opened');
        evt.currentTarget.querySelector('.menu__list-vector').classList.toggle('menu__list-vector_opened')
      });
    });
  }

  _closeList() {
    this._menu.querySelectorAll('.menu__list_opened').forEach(item => {
      item.classList.remove('menu__list_opened')
    })
    this._menu.querySelectorAll('.menu__list-vector_opened').forEach(item => {
      item.classList.remove('menu__list-vector_opened')
    })
  }
}