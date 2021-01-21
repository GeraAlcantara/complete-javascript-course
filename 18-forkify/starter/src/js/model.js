import { async } from 'regenerator-runtime';
import { RES_PER_PAGE } from './config.js';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmark: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
      cooking_time: recipe.cooking_time,
    };
    if (state.bookmark.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmark = true;
    } else state.recipe.bookmark = false;
    console.log(state.recipe);
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
export const getResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 0
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = oldQt * newServings / oldServince
    // 2 * 8 / 4 = 4
  });
  state.recipe.servings = newServings;
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmark.push(recipe);

  //Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmark = true;
};
export const deleteBookmark = function (id) {
  // Delete recipe
  const index = state.bookmark.findIndex(el => el.id === id);

  state.bookmark.splice(index, 1);
  //Mark current recipe as Not bookmark
  if (id === state.recipe.id) state.recipe.bookmark = false;
};
