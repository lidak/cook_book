//THIS FILE SHOULD NOT BE A PART FO COOKING MACHINE IN FUTURE.
//IT'S JUST A PROTOTYPE AND WAS CREATED TO SHOW POSSIBLE
//COOK BOOK AND RECEIPTS STRUCTURE.
import Core from './core/core';
import recipeInterface from './common/interfaces/recipe';

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

let core = new Core();

const dishesSelect = document.getElementById('dishes') as HTMLInputElement;
const recipesList:string[] = core.cookBook.getRecipesList();
let availableOptions:{} = {};
const optionsFormEl = document.getElementById('options_container');

recipesList.forEach((recipeName:string) => {

    const optionEl = document.createElement('option');
    optionEl.innerText = recipeName;
    optionEl.setAttribute('value', recipeName);
    dishesSelect.appendChild(optionEl);

});

dishesSelect.onchange = (event?:HTMLInputEvent) => {
    changeSelectedRecipe(event.target.value);
}

changeSelectedRecipe(recipesList[0]);

function changeSelectedRecipe(newSelectedReceip:string) {
    availableOptions = core.cookBook.getRecipeAvailableOptions(newSelectedReceip);
    optionsFormEl.innerHTML = '';

    Object.keys(availableOptions).forEach((optionName: string) => {
        const optionSelectEl = document.createElement('select');
        optionSelectEl.setAttribute('name', optionName);

        const optionsData = availableOptions[optionName];
        optionsData.forEach((optionValue:string) => {
            const optionEl = document.createElement('option');
            optionEl.innerText = optionValue;
            optionSelectEl.appendChild(optionEl);
        });
        optionsFormEl.appendChild(optionSelectEl);
        optionSelectEl.onchange = changeSelectedOptions;
    })
}

function changeSelectedOptions() {
    const selectedDish:string = dishesSelect.value;
    const options = {};

    Object.keys(availableOptions).forEach((optionName:string) => {
        options[optionName] = optionsFormEl[optionName].value;
    });

    const cookSequence = core.cookBook.getCookSequence(selectedDish, options);
    document.getElementById('receipt_sequence').innerText = JSON.stringify(cookSequence, null, 4);
}

