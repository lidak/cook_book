import moduleInterface from '../common/interfaces/module'

export default class storageModule implements moduleInterface{
    name: string;
    //TODO : discuss that every storage contains only ONE ingredient

    getIngredients(name: string, amount: number){

    }
    loadIngredients(name: string, amount: number){

    }

    isAvailable(name: string, amount: number){
        // check avb ingredient from storage
    }
}