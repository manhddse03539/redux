import React from 'react';

const Recipe = (props) => {
    const { recipeList, ingredientList } = props;
    return (
        <ul className="recipe">
            {recipeList.map(recipe => (
                <li key={recipe.name}>{recipe.name}
                    <ul>
                        {ingredientList.map(ingredient => (
                            ingredient.recipe === recipe.name ?
                                <li key={ingredient.recipe}>{ingredient.ingredient} : {ingredient.quantity}</li> : ''
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

export default Recipe;