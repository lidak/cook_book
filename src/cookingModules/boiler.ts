import moduleInterface from '../common/interfaces/module'
import storageModule from '../storageModules/storageModule'

export default class BoilerModule implements moduleInterface{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    getIngredient(name: string, amount: number){

    }

    loadIngredient(name: string, amount: number){

    }

    cook(ingredients: any, options: any){
        return true;
    }
}