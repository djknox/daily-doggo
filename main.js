let randomButton = document.querySelector('#random-button');
let dogImageContainer = document.querySelector('#dog-image-container');
let dogImage = document.querySelector('#dog-image');
let dateContainer = document.querySelector('#date-container');
let dateHeading = document.querySelector('#date-heading');
let timeHeading = document.querySelector('#time-heading');
let dayHeading = document.querySelector('#day-heading');

document.addEventListener("DOMContentLoaded", function(event) {
    dateHeading.innerText = moment().format('MMMM Do, YYYY');
    timeHeading.innerText = moment().format('h:mm:ss a');

    setInterval(() => {
        timeHeading.innerText = '';
        timeHeading.innerText = moment().format('h:mm:ss a');
    }, 1000);

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then((data) => {
            console.log('data', data);
            dayHeading.innerText = `${moment().format('dddd')} doggo:`;
            dogImage.src = data.message;
            dogImageContainer.innerHTML = '';
            dogImageContainer.appendChild(dogImage);
        })
        .catch((error) => {
            console.log('Request failed', error);
        });

    randomButton.addEventListener('click', (event) => {
        event.preventDefault();
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then((data) => {
                console.log('data', data);
                dayHeading.innerText = 'random doggo:'
                dogImage.src = data.message;
                dogImageContainer.innerHTML = '';
                dogImageContainer.appendChild(dogImage);
            })
            .catch((error) => {
                console.log('Request failed', error);
            });
    
        console.log('random doggo button clicked');
    });
});