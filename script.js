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
  button.addEventListener('click', function () {
    const value = parseInt(this.getAttribute('data-value'));
    console.log(selectedValue);

    if (selectedValue < 5) {
      selectedValue++;
    } else {
      alert('you exceeded the maximum limit.');
    }
  });
});

//when submit button is clicked
submitBtn.addEventListener('click', function () {
  container2.classList.remove('hidden');
  //display selected value in result div

  result.textContent = `You selected ${selectedValue} out of ${circle.length}`;
});
