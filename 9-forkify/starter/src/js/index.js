import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView'
import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';
import Recipe from './models/Recipe';
import * as listView from './views/listView';
import List from './models/List';
import Likes from './models/Likes';

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

/**
 * Recipe Controller
 */
const controlRecipe = async() => {
    const id = window.location.hash.replace('#', '');

    if (id) {
        //prepera UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //highlight selected
        if (state.search)
            searchView.highlightSelected(id);

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
};

/**
 * Shopping List Controller
 */
const listController = () => {
    // Crete new list if there is none
    if (!state.list) {
        state.list = new List();
    }

    // Add each ingredients into the list
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
};

/**
 * Like Controller
 */

const controllerLike = () => {
    if (!state.likes) {
        state.likes = new Likes();
    }

    const currentId = state.recipe.id;

    // User has not yet likes recipe
    if (state.likes.isLiked(currentId)) {
        // Add like to state
        state.likes.addLike(currentId, state.recipe.title, state.recipe.author, state.recipe.img);

        // Toggle like button

        // Add to UI list
        console.log(state.likes);
    } else {
        // Remove like to state
        state.likes.deleteLike(currentId);

        // Toggle like button

        // Remove from UI list
        console.log(state.likes);
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
});

['hashchange', 'load'].forEach((eventName) => {
    window.addEventListener(eventName, controlRecipe);
});

// Handle delete
elements.shopping.addEventListener('click', ev => {
    const id = ev.target.closest('.shopping__item').dataset.itemid;
    if (ev.target.matches('.shopping__delete, .shopping__delete *')) {
        // Delete from the state
        state.list.deleteItem(id);
        //Delete from UI
        listView.deleteItem(id);
    } else if (ev.target.matches('.shopping__count-value')) {
        const val = parseFloat(ev.target.value, 10);
        state.list.updateCount(id, val);
    }
});

// Handling recipe button clicks
elements.recipe.addEventListener('click', (ev) => {
    if (ev.target.matches('.btn-decrease, .btn-decrease *')) {
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if (ev.target.matches('.btn-increase, .btn-increase *')) {
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (ev.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        listController();
    } else if (ev.target.matches('.recipe__love, .recipe__love *')) {
        // Like controller
        controllerLike();
    }
});

window.state = state;