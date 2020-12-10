import React from 'react';
import Recipe from '../componets/Recipe';
import { useSelector, useDispatch } from 'react-redux';
import { addRecipe } from '../actions/action';

const HomePage = (props) => {
    const recipeList = useSelector(state => state.recipe.recipes);
    const ingredientList = useSelector(state => state.recipe.ingredients);
    const disPatch = useDispatch();

    const handleAddRecipe = (event) => {
        event.preventDefault();
        const recipe = document.querySelector('#recipeText').value;
        const ingredient = document.querySelector('#ingredientText').value;
        const quantity = document.querySelector('#quantity').value;
        const newRecipe = {
            recipe: recipe,
            ingredient: ingredient,
            quantity: quantity
        }
        const action = addRecipe(newRecipe);
        disPatch(action);
    }

    return (
        <div>
            <h1>RECIPE APP</h1>
            <form id="recipe" onSubmit={handleAddRecipe}>
                <div>
                    Recipe :
                    <input id="recipeText" />
                </div>
                <div>
                    Ingredient :
                    <input id="ingredientText" />
                </div>
                <div>
                    Quantity :
                    <input id="quantity" />
                </div>
                <button type="submit">Add recipe</button>
            </form>
            <Recipe
                recipeList={recipeList}
                ingredientList={ingredientList}
            />
        </div>
    );
}

export default HomePage;