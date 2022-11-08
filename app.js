/* Imports */
import { goblinRender } from './render-utils.js';


/* Get DOM Elements */
const killsEl = document.getElementById('amygdalas-slayed');
const hunterVitEl = document.getElementById('vitality');
const nameInputForm = document.querySelector('form');
const nameInputBtn = document.getElementById('name-btn');
const amygdalaListEl = document.querySelector('.amygdalas');

/* State */
let amygdalasSlain = 0;
let hunterVitality = 0;
let amygdalas = [
    { id: 1, name: 'ORPHEUS', vit: 3 }
    { id: 2, name: 'SISYPHUS', vit: 2 }
];
let idAggregator = 3; 

/* Events */


/* Display Functions */



// (don't forget to call any display functions you want to run on page load!)

