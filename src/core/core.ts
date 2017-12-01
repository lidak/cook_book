import CookBook from '../cookBook/cookBook';
import storageModule from '../storageModules/storageModule'
import BoilerModule from '../cookingModules/boiler'
import moduleInterface from '../common/interfaces/module';
import recipe from '../common/interfaces/recipe';

export default class Core {
    cookBook = new CookBook();
    modules:moduleInterface[] = [];
    currentRecipe:recipe = null;

    initialise(){

    }

    setCurrentRecipe(recipe) {
        this.currentRecipe = recipe;
    }

    isModulePlugedIn(name){
        return this.modules.find(module => module.name === name);
    }

    plugModule(module){
        this.modules.push(module);
    }

    unplugModule(name){
        this.modules = this.modules.filter(module => module.name !== name);
    }

    getAvailableRecipes() {
        const storage = this.modules.find(module => module.name === 'storage');
        return this.cookBook.recipes.filter(recipe => {
            return recipe.isAvailable(this.modules, storage.ingredients);
        });
    }

    cook(recipe: recipe, options: {}) {
        const sequence = recipe.buildReceipSequence(options);

        sequence.forEach(step => {
           const module = this.modules.find(module => module.name === step.action);
           module.loadIngredient(step.ingredients);

           module.cook(step.options);
        });
    }
}