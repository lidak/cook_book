import IngredientInterface from './Ingredient';
import OptionInterface from './Option';

export default interface RecipeStepInterface {
    moduleName: string;
    options: OptionInterface[];
    ingredients: IngredientInterface[];
    availableOptions: OptionInterface[];
    delay: number;

    getAllIngredients():IngredientInterface[];
    getModuleOptions():OptionInterface[];
}