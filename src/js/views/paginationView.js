import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkupButton(page, dir) {
    return dir === 0
      ? `
    <button class="btn--inline pagination__btn--prev" data-goto="${page - 1}">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${page - 1}</span>
    </button> `
      : `
    <button class="btn--inline pagination__btn--next" data-goto="${page + 1}">
        <span>Page ${page + 1}</span>
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    `;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // console.log(numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(curPage, 1);
    }
    // Last Page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton(curPage, 0);
    }
    // Other Page
    if (curPage < numPages) {
      return (
        this._generateMarkupButton(curPage, 0) +
        this._generateMarkupButton(curPage, 1)
      );
    }
    // Page 1, and there are NO other pages
    return ``;
  }
}

export default new PaginationView();
