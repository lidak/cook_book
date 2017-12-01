import ModuleInterface from "../interfaces/Module";
import IngredientInterface from "../interfaces/Ingredient";

export default class StorageModule implements ModuleInterface {
    name: string;
    ingredients: IngredientInterface[] = [];

    constructor(name: string) {
        this.name = name;
    }

    operate(ingredients: IngredientInterface[]) {
        this.ingredients = ingredients;
    }

    addIngredient(newIngredient: IngredientInterface) {
        this.ingredients.map(ingredient => {
            if(ingredient.name === newIngredient.name) {
                ingredient.amount += newIngredient.amount;
            }

            return ingredient;
        });
    }

    removeIngredient(ingredientToRemove: IngredientInterface) {
        this.ingredients.map(ingredient => {
            if(ingredient.name === ingredientToRemove.name) {
                ingredient.amount -= ingredientToRemove.amount;

                ingredient.amount = ingredient.amount < 0 ? 0 : ingredient.amount;
            }

            return ingredient;
        })
    }
}