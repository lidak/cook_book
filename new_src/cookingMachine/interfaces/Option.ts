import IngredientInterface from "./Ingredient";

export default interface OptionInterface {
    /**
     * public name
     */
    name: string;

    uiType: ['bool', 'select', 'number'],

    type: ['ingredient', 'module']

}