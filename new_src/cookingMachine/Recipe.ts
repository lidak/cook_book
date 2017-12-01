import RecipeInterface from "./interfaces/Recipe";
import ModuleInterface from "./interfaces/Module";
import IngredientInterface from "./interfaces/Ingredient";
import RecipeStepInterface from "./interfaces/RecipeStep";

export default class Recipe implements RecipeInterface {
    public name: string;
    public description?: string;
    public steps: RecipeStepInterface[];

    constructor(rawRecipe:{[key: string]: any}) {
        this.name = rawRecipe.name;
        this.description = rawRecipe.description;

        this.steps = rawRecipe.steps;
    }

    isAvailable(modules: ModuleInterface[], ingredients: IngredientInterface[]) {
        // #TODO
    }
}