class SearchView {
  constructor() {
    this._parentElement = document.querySelector('.search');

    this._errorMessage =
      'We could not find that recipe. Please try another one';
    this._message = '';
  }
  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
