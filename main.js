'use strict';

let tries = 0;
let success = 0;
const num = [2,3,4,5,6,7,8,9];

let choice = prompt('For which number would you like to try?')

let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');

let i = 0;

function ask() {
  h3.innerHTML = `
  ${num[i]} * ${choice} = 
  <input type="text" id="answear" type="3">
  <button>OK</button>
  `

  document.querySelector('button').addEventListener('click', function(){
     if(num[i] * choice == document.querySelector('#answear').value) {
         h4.innerText= 'Wll done!'
         success++
         i++
      } else{
        h4.innerText= 'Try again...'
      }
      tries++
      document.querySelector('h2').innerText = `Score: ${success} in ${tries} tries`;
      if(i < num.length) ask()
      if(i == num.length) {
        choice = prompt(' Choose an new number.')
        i = 0;
        ask()
      }
})
}

ask()