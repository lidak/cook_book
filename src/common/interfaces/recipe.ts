import recipeStep from './recipeStep';

export default interface recipeInerface {
    title: string,
    availableOptions:object,
    buildReceipSequence(options: any): [object]
}