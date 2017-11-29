import Ingredient from "../../ingredients/ingredient";

export default interface moduleInterface {
    name: string,
    getIngredient(name: string, amount: number),
    loadIngredient(ingredient: Ingredient)

    // TODO should return Ingredient
}