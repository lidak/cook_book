//import ingredient from '../ingredients';

export default interface moduleInerface {
   // name: string,
    getIngredients(name: string, amount: number),
    loadIngredients(name: string, amount: number)
}