import recipeInterface from '../common/interfaces/recipe';
import recipeStep from '../common/interfaces/recipeStep';

export interface SteakOptions {
    cookingLevel: string,
    sause: string
}

interface SteakAvailableOptions {
    cookingLevel: [string],
    sause: [string]
}

export default class Steak implements recipeInterface {
    public title = 'Steak';
    availableOptions:SteakAvailableOptions = {
        cookingLevel: ['rare', 'medium rare', 'well done'],
        sause: ['bbq', 'blue cheese']
    }

    buildReceipSequence(options:SteakOptions):[object] {
        let cookingSequence:[object] = [{
            ingredients:  [{oil: 20}],
            operation: 'fry',
            options: {
                temperature: 500,
                time: 200
            }
        }];

        const {
            cookingLevel,
            sause
        } = options;


        let beefCookingTime: number = (this.availableOptions.cookingLevel.indexOf(options.cookingLevel) + 1) * 10;

        cookingSequence.push({
            ingredients: [{'beaf steak': 3000}],
            operation: 'fry',
            options: {
                temperature: 500,
                time: beefCookingTime
            }
        });

        return cookingSequence;
    }
}