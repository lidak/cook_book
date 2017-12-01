import ModuleInterface from './Module';
import CookBookInterface from './CookBook';
import RecipeInterface from './Recipe';

export default interface CoreInterface {
    modules: ModuleInterface[];
    cookBook: CookBookInterface;

    isModulePluggedIn(moduleName:string):boolean;
    plugModule(module:ModuleInterface):void;
    unplugModule(moduleName:string):void;
    getAvailableRecipes():RecipeInterface[];
    cook(recipe: RecipeInterface):void;
}