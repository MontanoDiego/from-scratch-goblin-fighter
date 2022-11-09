/* Imports */
import { amygdalaRender } from './render-utils.js';


/* Get DOM Elements */
const killsEl = document.getElementById('amygdalas-slayed');
const hunterVitEl = document.getElementById('vitality');
const nameInputForm = document.getElementById('amygdala-name-input');
const nameInputBtn = document.getElementById('name-btn');
const amygdalaListEl = document.querySelector('.amygdalas');

/* State */
let amygdalasSlain = 0;
let hunterVitality = 0;
let amygdalas = [
    { id: 1, name: 'ORPHEUS', vit: 5 },
    { id: 2, name: 'SISYPHUS', vit: 4 }
];
let idAggregator = 3; 

/* Events */
nameInputBtn.addEventListener('click', () => {
    // input name
    const amygdalaName = nameInputForm.value;
    // generate math
    let vitality = Math.floor(Math.random() * 10);
    // create amygdala !!
    const newAmygdala = {
        id: idAggregator,
        name: `${amygdalaName}`,
        vit: vitality,
    };
    // push to object array
    amygdalas.push(newAmygdala);
    // reset
    nameInputForm.value = '';
    // NEED DISPLAY FUNCTION
    displayAmygdala();
});

/* Display Functions */

function displayAmygdala() {
    amygdalaListEl.textContent = '';

    for (let amygdala of amygdalas) {
        const amygdalaEl = amygdalaRender(amygdala);

        amygdalaEl.addEventListener('click', () => {
            // NEED CLICK HANDLER
            console.log('yeah');
        });
    }
}


// (don't forget to call any display functions you want to run on page load!)

