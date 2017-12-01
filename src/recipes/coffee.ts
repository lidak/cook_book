import recipeInterface from '../common/interfaces/recipe';

interface CoffeeOptions {
    type: string,
    sweetness: string,
    size: string
}

interface CoffeeAvailableOptionsProp {
    type: string[],
    sweetness: string[],
    size: string[]
}

export default class Steak implements recipeInterface {
    public title = 'Coffee';
    availableOptions:CoffeeAvailableOptionsProp = {
        type: ['espresso', 'americano', 'latte'],
        sweetness: ['no sugar', 'sweet', 'extra sweet'],
        size: ['small', 'medium', 'big']
    };

    isAvailable(modules, ingredients) {
        // do logic here based on steps requirements such as module, ingredients, so on
    }

    buildReceipSequence(options: CoffeeOptions) {
        const {
            type,
            sweetness,
            size
        } = options;
        let coffeeCoef:number = 1;
        let waterCoef:number = 1;
        let sugarCoef:number = 1;
        let milkCoef:number = 1;
        //Will convert 'small'->1, 'medium'->2, 'big'->3
        const sizeNumber:number = this.availableOptions.size.indexOf(size) + 1;
        let amountOfCoffee:number = 0;

        switch(type) {
            //Espresso
            case(this.availableOptions.type[0]):
                coffeeCoef = 2;
                waterCoef = 1;
                sugarCoef = 1;
                milkCoef = 0;
                break;
            //Americano
            case(this.availableOptions.type[1]):
                coffeeCoef = 0;
                waterCoef = 2;
                sugarCoef = 2;
                milkCoef = 0;
                break;
            //Latte
            case(this.availableOptions.type[2]):
                coffeeCoef = 1;
                waterCoef = 2;
                sugarCoef = 2;
                milkCoef = 2;
                break;
        }

        let cookingSequence:[object] = [{
            ingredients:  {
               milk: milkCoef * 50 * sizeNumber,
               water: waterCoef * 100 * sizeNumber,
               sugar: sugarCoef * (this.availableOptions.sweetness.indexOf(sweetness)) * sizeNumber,
               coffee: coffeeCoef * 10 * sizeNumber
            },
            operation: 'coffeMachine',
            options: {
                temperature: 200,
                time: 100
            }
        }];

        return cookingSequence;
    }
}