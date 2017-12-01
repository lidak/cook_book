import IngredientInterface from './Ingredient';
import OptionInterface from './Option';

export default interface ModuleInterface {
    name: string;

    operate(ingredients: IngredientInterface[], options?: OptionInterface[]);
}