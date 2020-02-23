import {
    elements,
    elementStrings
} from './base';

export const getInput = () => {
    return elements.searchInput.value;
};

export const highlightSelected = (id) => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    });
    document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');
};

const renderRecipe = (recipe) => {

    /*
    publisher: "101 Cookbooks"
title: "Best Pizza Dough Ever"
source_url: "http://www.101cookbooks.com/archives/001199.html"
recipe_id: "47746"
image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
social_rank: 100
publisher_url: "http://www.101cookbooks.com"
__proto__: Object
    */
    const markup = `
                <li>
                    <a class="results__link" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
                `;

    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
    elements.searchResultPages.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur)
            }

            return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')}...`;
    }

    return title;
}

const createButton = (page, type) => {
    return `
     <button class="btn-inline results__btn--${type}"  data-goto="${type === 'prev' ? page - 1 : page + 1}">
     <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
     <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
     `;
}

const renderPageButtons = (page, numResults, resPerPage = 10) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;

    if (page === 1 && pages > 1) {
        // only can go to next
        button = createButton(page, 'next');
    } else if (page < pages) {
        //go both
        button = `${createButton(page, 'next')}${createButton(page, 'prev')}`;
    } else if (page === pages && pages > 1) {
        //only can go to prev
        button = createButton(page, 'prev');
    }

    elements.searchResultPages.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    if (!recipes) {
        return;
    }
    //10
    const start = (page - 1) * resPerPage; // 0 , 10
    const end = resPerPage * page; // 9, 19

    recipes.slice(start, end).forEach(r => {
        renderRecipe(r);
    });

    renderPageButtons(page, recipes.length, resPerPage);
};