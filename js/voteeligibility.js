'use strict';
function votingEligibility(event) {

    event.preventDefault();

const name = document.getElementById('name').value;
const age = parseInt(document.getElementById('age').value);

if(!name || isNaN(age) || age < 0) {
    console.log('Provide a valid name and age!');
    return;
}

let result;
if(age >= 18) {
    result = `Hello ${name}! You are ${age} and eligible to vote🥳`;
} else{
     result = `Hello ${name}! You are ${age} and not eligible to vote😪`;
}


document.getElementById('result').textContent = result;

}

document.getElementById('voteChecker').addEventListener('submit', votingEligibility);



