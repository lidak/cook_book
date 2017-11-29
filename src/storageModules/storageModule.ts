import moduleInterface from '../common/interfaces/module'
import ingredient from '../ingredients/ingredient'

export default class storageModule implements moduleInterface{
    name: string;

    ingredients:[ingredient] = [
        new ingredient("water", 25),
        new ingredient("coffee", 30),
        new ingredient("sugar", 50),
        new ingredient("milk", 10)
    ];

    constructor(name: string){
        this.name = name;
    }

    getIngredient(name: string, amount: number){
        let ingredient = this.ingredients.filter(ingredient=>ingredient.name === name && ingredient.amount <= amount);
        console.log(ingredient);
        return ingredient;
    }

    loadIngredient(name: string, amount: number){
        this.ingredients.push(new ingredient(name, amount));
    }

    isAvailable(name: string, amount: number){
        // TODO : remove
    }
}