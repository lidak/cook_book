import moduleInterface from '../common/interfaces/module'
import Ingredient from "../ingredients/ingredient";

export default class BoilerModule implements moduleInterface{
    name: string;
    prepearedIngredient: Ingredient;

    constructor(name: string){
        this.name = name;
    }

    getIngredient(name: string, amount: number){
        // ???
    }

    loadIngredient(ingredient:Ingredient){
        // TODO: load ing from core
    }

    cook(ingredients: [Ingredient], options: any){
        // TODO: return prepeared ing
    }
}