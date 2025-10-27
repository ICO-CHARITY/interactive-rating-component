'use strict';

const container2 = document.querySelector('.container2');
console.log(container2);

const circle = document.querySelectorAll('.circle');
console.log(circle);

const submitBtn = document.querySelector('.submit');
console.log(submitBtn);

const result = document.querySelector('.result');
console.log(result);

let selectedValue = 0;

//when a circle is clicked
circle.forEach(function (button) {
  button.addEventListener('click', function (e) {
    //no e.preventDefault(); because is a button check the html

    // const value = parseInt(this.getAttribute('data-value'));
    console.log(selectedValue);

    if (selectedValue < 5) {
      selectedValue++;
    } else {
      selectedValue--;
    }
  });
});

//when submit button is clicked
submitBtn.addEventListener('click', function (e) {
  e.preventDefault(); //prevent reload
  container2.classList.remove('hidden'); //show container2 card

  result.textContent = `You selected ${selectedValue} out of ${circle.length}`; //display selected value in result div
});

//dark mode toggle
const star = document.querySelector('.star');
const body = document.body;

star.addEventListener('click', function () {
  console.log('hello dark mode');
  const isDark = body.dataset.theme === 'dark';
  body.dataset.theme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

window.addEventListener('DOMContentLoaded', function () {
  const saveTheme = this.localStorage.getItem('theme') || 'light';
  body.dataset.theme = saveTheme;
});
