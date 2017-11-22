import CookBook from '../cookBook/cookBook';
import storageModule from '../storageModules/storageModule'
import BoilerModule from '../cookingModules/boiler'

export default class Core {
    cookBook = new CookBook();
    storageModule = new storageModule("storage1")
        .getIngredient("water", 1);
    boiler = new BoilerModule("boiler")
        .getIngredient("water", 1);
}