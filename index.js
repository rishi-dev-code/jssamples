import { testMap } from './map.js';


console.log("Its working");

const showMapbutton = document.querySelector("#mapButton");
showMapbutton.addEventListener('click', () => {
    console.log("Map operator clicked");
    testMap();

})