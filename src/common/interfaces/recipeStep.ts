export default interface recipeStep {
    ingredients: [{title: string, amount: number}],
    operation: string,
    options: object
}