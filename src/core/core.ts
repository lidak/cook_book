import CookBook from '../cookBook/cookBook';
import storageModule from '../storageModules/storageModule'

export default class Core {
    cookBook = new CookBook();
    storageModule = new storageModule("storage1")
        .getIngredient("water", 1);
}