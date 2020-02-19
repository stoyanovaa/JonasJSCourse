import Search from './models/Search';
import * as searchView from './views/searchView';
import {
    elements
} from './views/base';

/**
 * Search object
 * Recepie obj
 * Shopping list 
 * Liked recepies
 */
const state = {};

const controlSearch = async() => {
    //1. get query from the view
    const query = searchView.getInput();

    if (query) {
        state.search = new Search(query);
        //3 clear ui
        searchView.clearInput();
        searchView.clearResults();
        //4 search for recipes
        await state.search.getResults();

        //5. render resuls to UI     
        console.log(state.search.result);
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
}, false);