
import { displayweather } from './displayweather.js';
import { getweather } from './getweather.js';
import { newdate } from './newdate.js';

// 2. Create the dictionary mapping the API text to your imports


export async function loadmenu(){

    
            const dates = newdate();

            const container = document.getElementById('container');
            container.classList.add('container');

            const maincontiner = document.getElementById('maincontainer');

            const divsearc = document.createElement('div');
            divsearc.classList.add('div-seacrh');

            const formsearch = document.createElement('form');
            formsearch.classList.add('form-search');
            formsearch.addEventListener('submit', async (e) => {
                const searchcity = document.querySelector('.seacrh-input').value.trim();
                e.preventDefault();
                
                const newdata = await getweather(searchcity,dates);
                displayweather(newdata);
            });
            const seacrhbar = document.createElement('input');
            seacrhbar.classList.add('seacrh-input');
            seacrhbar.type='text';
            seacrhbar.placeholder='input city name';

            const submitbtn = document.createElement('button');
            submitbtn.classList.add('submitbtn')
            submitbtn.textContent= 'search';

            container.insertBefore(divsearc, maincontiner);
            divsearc.append(formsearch);
            formsearch.append(seacrhbar,submitbtn);

            const initialdata = await getweather( 'london', dates);
            console.log(initialdata);
            displayweather(initialdata);


       
}

