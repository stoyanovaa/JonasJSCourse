import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView'
import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';

import Recipe from './models/Recipe';

/**
 * Search object
 * Recepie obj
 * Shopping list 
 * Liked recepies
 */
const state = {};

/**
 * Search Controller
 */
const controlSearch = async() => {
    //1. get query from the view
    const query = searchView.getInput();

    if (query) {
        state.search = new Search(query);
        //3 clear ui
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResultContainer);
        //4 search for recipes
        await state.search.getResults();
        clearLoader();

        //5. render resuls to UI     
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
}, false);

elements.searchResultPages.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        searchView.clearResults();
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.renderResults(state.search.result, goToPage);
    }
})


/**
 * Recipe Controller
 */
const controlRecipe = async() => {
    const id = window.location.hash.replace('#', '');

    if (id) {
        //prepera UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //create new recipe
        state.recipe = new Recipe(id);

        try {
            //call recipe data
            await state.recipe.getRecipe();
            window.r = state.recipe

            //calc servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
            state.recipe.parseIngredients();

            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        } catch (error) {
            console.log(error);
        }
    }
}

// window.addEventListener('hashchange', (ev) => {
//     controlRecipe();
// });

// window.addEventListener('load', (ev) => {
//     controlRecipe();
// });

['hashchange', 'load'].forEach((eventName) => {
    window.addEventListener(eventName, controlRecipe);
});