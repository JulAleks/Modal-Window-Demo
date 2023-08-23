// This project was completed as part of "The Complete JavaScript Course 2023: From Zero to Expert!" on Udemy, taught by Jonas Schmedtmann.
// Please be aware that not all of the code strictly follows the course's intended flow, as I have made adjustments to the logic.
'use strict';

//creating events
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//opening the modals
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//cloding the modals
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//loop throught the buttons to show the modals on click
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(
    'click',
    (function (index) {
      return function () {
        console.log(`Button ${index} clicked`);
        openModal();
      };
    })(i)
  );
}

//if the modals are open, click to close them
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  //if we clicked on Esc button
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    //if the modal is open, close it
    closeModal();
  }
});
