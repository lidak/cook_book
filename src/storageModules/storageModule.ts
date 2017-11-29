import moduleInterface from '../common/interfaces/module'
import Ingredient from '../ingredients/ingredient'

export default class storageModule implements moduleInterface{
    name: string;

    ingredients:[Ingredient] = [
        new Ingredient("water", 25),
        new Ingredient("coffee", 30),
        new Ingredient("sugar", 50),
        new Ingredient("milk", 10)
    ];

    constructor(name: string){
        this.name = name;
    }

    getIngredient(name: string, amount: number){
        let ingredient = this.ingredients.filter(ingredient=>ingredient.name === name && ingredient.amount <= amount);
        console.log(ingredient);
        return ingredient;
        // TODO: remove ing from storage
    }

    loadIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

    isAvailable(name: string, amount: number){
        // TODO : check av ingredient for current recipe
    }
}