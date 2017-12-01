import ModuleInterface from "./interfaces/Module";
import CookBook from "./CookBook";
import CoreInterface from "./interfaces/Core";
import RecipeInterface from "./interfaces/Recipe";

export class Core implements CoreInterface {
    modules: ModuleInterface[] = [];
    cookBook: CookBook;

    constructor(cookBook: CookBook) {
        this.cookBook = cookBook;
    }

    isModulePluggedIn(moduleName: string) {
        return !!this.modules.find(module => module.name === moduleName);
    }

    plugModule(module: ModuleInterface) {
        this.modules.push(module);
    }

    unplugModule(moduleName: string) {
        this.modules = this.modules.filter(module => module.name !== moduleName);
    }

    getAvailableRecipes() {
        const storage = this.modules.find(module => module.name === 'storage');

        return this.cookBook.recipes.filter(recipe => recipe.isAvailable(this.modules, storage.ingredients));
    }

    cook(recipe: RecipeInterface) {
        recipe.steps.forEach(step => {
            const module = this.modules.find(module => module.name === step.moduleName);

            module.operate(step.getAllIngredients(), step.getModuleOptions());
        });
    }
}