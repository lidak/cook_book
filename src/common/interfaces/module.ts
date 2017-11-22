
export default interface moduleInerface {
    name: string,
    getIngredient(name: string, amount: number),
    loadIngredient(name: string, amount: number)
}