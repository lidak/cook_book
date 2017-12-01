import ModuleInterface from "../interfaces/Module";
import IngredientInterface from "../interfaces/Ingredient";
import OptionInterface from "../interfaces/Option";

export default abstract class CookingModule implements ModuleInterface {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract operate(ingredients: IngredientInterface[], options?: OptionInterface[]);
}