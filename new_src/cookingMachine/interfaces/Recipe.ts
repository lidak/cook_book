import RecipeStepInterface from './RecipeStep';
import ModuleInterface from './Module';
import IngredientInterface from './Ingredient';

export default interface RecipeInterface {
    name: string;
    description?: string;
    steps: RecipeStepInterface[];

    isAvailable(modules: ModuleInterface[], ingredients: IngredientInterface[]): void;
}