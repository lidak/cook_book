import recipeStep from './recipeStep';
import moduleInterface from './module';
import Ingredient from '../../ingredients/ingredient';

export default interface recipeInerface {
    title: string,
    availableOptions:object,
    buildReceipSequence(options: any): [object]
    isAvailable(modules:moduleInterface[], ingredients:Ingredient[])
}