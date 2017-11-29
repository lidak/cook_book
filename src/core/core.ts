import CookBook from '../cookBook/cookBook';
import storageModule from '../storageModules/storageModule'
import BoilerModule from '../cookingModules/boiler'

export default class Core {
    cookBook = new CookBook();
    modules = [];

    initialise(){

    }

    checkAvailableModues(name){

    }

    plugModule(module){
        this.modules.push(module);
    }

    unplugModule(module){

    }

    cook(recipe: {}, options: {}){

    }
}