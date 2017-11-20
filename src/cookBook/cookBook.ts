import steak from '../recipes/steak';
import coffee from '../recipes/coffee';

import recipeInterface from '../common/interfaces/recipe';
import recipeStep from '../common/interfaces/recipeStep';

export default class CookBook {
  recipes:[recipeInterface] = [new steak(), new coffee()];

  getRecipesList():string[] {
    return this.recipes.map((recipe:recipeInterface):string => {
      return recipe.title;
    });
  }

  getRecipeAvailableOptions(title:string):object {
    const selectedRecipe:recipeInterface = this.recipes.find((recipe:recipeInterface) => {
      return recipe.title === title;
    });
    return selectedRecipe.availableOptions;
  }

  getCookSequence(title:string, options:object):[object] {
    const neededRecipe = this.recipes.find((recipe) => {
      return recipe.title === title;
    });
    return neededRecipe.buildReceipSequence(options);
  }
}
