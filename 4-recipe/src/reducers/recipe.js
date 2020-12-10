const initialState = {
    recipes: [
        { name: "recipe1" }
    ],
    ingredients: [
        {
            recipe: "recipe1",
            ingredient: "egg",
            quantity: 2
        }
    ]
}
const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RECIPE': {
            const newRecipes = [...state.recipes];
            const newIngredients = [...state.ingredients];
            let isExisted = false;
            if (newRecipes) {
                for (const recipe of newRecipes) {
                    if (recipe.name === action.payload.recipe) {
                        isExisted = true;
                    }
                }
            }
            if (!isExisted) {
                newRecipes.push({ name: action.payload.recipe });
                newIngredients.push({
                    recipe: action.payload.recipe,
                    ingredient: action.payload.ingredient,
                    quantity: action.payload.quantity
                })
                return {
                    ...state,
                    recipes: newRecipes,
                    ingredients: newIngredients
                };
            }
            return state;
        }
        default:
            return state;
    }
}

export default recipeReducer;