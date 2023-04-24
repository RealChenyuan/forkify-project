import View from './View';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow(render = false) {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
    if (render) this.render('', true, true);
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this, true));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {
    return `
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST23" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST23" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST23" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST23" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column upload__column-igds">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5"
            type="text"
            name="ingredient-1-quantity"
            placeholder="Quantity"
          />
          <input
            value="kg"
            type="text"
            name="ingredient-1-unit"
            placeholder="Unit"
          />
          <input
            value="Rice"
            type="text"
            required
            name="ingredient-1-description"
            placeholder="Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1"
            type="text"
            name="ingredient-2-quantity"
            placeholder="Quantity"
          />
          <input
            value=""
            type="text"
            name="ingredient-2-unit"
            placeholder="Unit"
          />
          <input
            value="Avocado"
            type="text"
            name="ingredient-2-description"
            placeholder="Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=""
            type="text"
            name="ingredient-3-quantity"
            placeholder="Quantity"
          />
          <input
            value=""
            type="text"
            name="ingredient-3-unit"
            placeholder="Unit"
          />
          <input
            value="salt"
            type="text"
            name="ingredient-3-description"
            placeholder="Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4-quantity"
            placeholder="Quantity"
          />
          <input type="text" name="ingredient-4-unit" placeholder="Unit" />
          <input
            type="text"
            name="ingredient-4-description"
            placeholder="Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5-quantity"
            placeholder="Quantity"
          />
          <input type="text" name="ingredient-5-unit" placeholder="Unit" />
          <input
            type="text"
            name="ingredient-5-description"
            placeholder="Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6-quantity"
            placeholder="Quantity"
          />
          <input type="text" name="ingredient-6-unit" placeholder="Unit" />
          <input
            type="text"
            name="ingredient-6-description"
            placeholder="Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${icons}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
    `;
  }
}

export default new AddRecipeView();
