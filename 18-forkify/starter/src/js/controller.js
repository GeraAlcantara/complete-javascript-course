import * as model from './model.js';
import recipeView from './views/recipeViews.js';
import searchViews from './views/searchView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //1) load recipe
    await model.loadRecipe(id);

    //2) render recepie
    recipeView.render(model.state.recipe);

    /* recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup); */
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchViews.getQuery();
    if (!query) return;

    // 2) Load Results
    await model.loadSearchResults(query);

    // 3) Render results
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchViews.addHandlerSearch(controlSearchResults);
};
init();
// controlSearchResults();
