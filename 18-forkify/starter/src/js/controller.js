import * as model from './model.js';
import recipeView from './views/recipeViews.js';
import searchViews from './views/searchView.js';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //1) load recipe
    await model.loadRecipe(id);

    //2) render recepie
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchViews.getQuery();
    if (!query) return;
    resultsView.renderSpinner();

    // 2) Load Results
    await model.loadSearchResults(query);

    // 3) Render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getResultsPage());

    // 4) Render Pagination
    console.log(model.state.search);
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
const controlPagination = function (gotoPage) {
  resultsView.render(model.getResultsPage(gotoPage));
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //Update the recipe servings (in State)
  model.updateServings(newServings);
  // Update The recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchViews.addHandlerSearch(controlSearchResults);
  paginationView.addHandleClick(controlPagination);
};
init();
// controlSearchResults();
