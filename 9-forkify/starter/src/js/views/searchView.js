import {
    elements
} from './base';

export const getInput = () => {
    return elements.searchInput.value;
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

export const renderResults = recipes => {
    recipes.forEach(r => {
        renderRecipe(r);
    });
};

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
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