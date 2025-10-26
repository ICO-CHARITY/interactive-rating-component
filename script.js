'use strict';
const submitBtn = document.querySelector('.submit');
console.log(submitBtn);

const container2 = document.querySelector('.container2');
console.log(container2);

submitBtn.addEventListener('click', function () {
  container2.classList.remove('hidden');
});
