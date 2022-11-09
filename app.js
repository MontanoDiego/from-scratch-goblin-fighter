/* Imports */
import { amygdalaRender } from './render-utils.js';


/* Get DOM Elements */
const killsEl = document.getElementById('amygdalas-slayed');
const hunterVitEl = document.getElementById('vitality');
const nameInputForm = document.getElementById('amygdala-name-input');
const nameInputBtn = document.getElementById('name-btn');
const amygdalaListEl = document.querySelector('.amygdalas');
const resetButton = document.getElementById('resetButton');

//render
const header = document.getElementById('header');
const label = document.getElementById('label');
const vitHeadEl = document.getElementById('vitality-head');
const hunterImageEl = document.getElementById('old-hunter');
const title = document.getElementById('title');

/* State */
let amygdalasSlain = 0;
let hunterVitality = 10;
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
    // increment ID
    idAggregator++;
    // push to object array
    amygdalas.push(newAmygdala);
    // reset
    nameInputForm.value = '';
    // NEED DISPLAY FUNCTION
    displayAmygdala();
});


// click handler !!

function amygdalaClickHandler(amygdalaData) {
    if (amygdalaData.vit <= 0) return;
    if (Math.random() < 0.44) {
        amygdalaData.vit--;
        alert('you hit ' + amygdalaData.name);
    } else if (Math.random() < 0.22) {
        amygdalaData.vit--;
        amygdalaData.vit--;
        amygdalaData.vit--;
        alert('CRITICAL HIT! You smashed ' + amygdalaData.name + ' for bonus damage!');
    } else {
        alert('you swung at ' + amygdalaData.name + ' but missed!');
    }

    if (Math.random() < 0.44) {
        hunterVitality--;
        alert(amygdalaData.name + ' swiped and gashed you!');
    } else if (Math.random() < 0.22) {
        hunterVitality--;
        hunterVitality--;
        hunterVitality--;
        alert('CRITICAL HIT! Your mind was flayed by ' + amygdalaData.name + ' for bonus damage!');
    } else {
        alert(amygdalaData.name + ' clawed at you, but missed!');
    }

    if (amygdalaData.vit === 0) {
        amygdalasSlain++;
    }
    
    if (hunterVitality <= 0) {
        alert('GAME OVER!');
        killsEl.classList.add('hide');
        hunterVitEl.classList.add('hide');
        nameInputForm.classList.add('hide');
        nameInputBtn.classList.add('hide');
        amygdalaListEl.classList.add('hide');
        header.classList.add('hide');
        label.classList.add('hide');
        vitHeadEl.classList.add('hide');
        hunterImageEl.classList.add('hunterDeath');
        title.textContent = 'GAME OVER!';
        resetButton.classList.remove('hide');
    }


    displayAmygdala();
    displayHunterStats();
}

resetButton.addEventListener('click', () => {
    location.reload();
    return false;
});


/* Display Functions */

function displayAmygdala() {
    amygdalaListEl.textContent = '';

    for (let amygdala of amygdalas) {
        const amygdalaEl = amygdalaRender(amygdala);

        amygdalaEl.addEventListener('click', () => {
            amygdalaClickHandler(amygdala);
        }
        );

        amygdalaListEl.append(amygdalaEl);
    }
}

function displayHunterStats() {
    hunterVitEl.textContent = hunterVitality;
    killsEl.textContent = amygdalasSlain;
}


// (don't forget to call any display functions you want to run on page load!)

displayAmygdala();
displayHunterStats();