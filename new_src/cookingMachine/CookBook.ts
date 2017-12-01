import CookBookInterface from './interfaces/CookBook';
import Recipe from './recipe';

export default class CookBook implements CookBookInterface {
    public recipes: Recipe[];

    constructor(rawRecipes: {}[]) {
        this.recipes = rawRecipes.map(rawRecipe => new Recipe(rawRecipe));
    }
}