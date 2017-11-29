export default interface moduleInterface {
    name: string,
    getIngredient(name: string, amount: number),
    loadIngredient(name: string, amount: number)
}