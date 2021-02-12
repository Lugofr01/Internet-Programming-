/* jshint esversion: 8 */
/* jshint node: true */
'use strict';

var urlParams = new URLSearchParams(window.location.search);

function greet() {
    const searchstring= window.location.search;

    const URLparameter= new URLSearchParams(searchstring);
    const nameinfo = URLparameter.get('name')||'student';
    let salutations= document.searchstring("h1");

    salutations.innerText ='Hi',  ${nameinfo};


}

function isPrime(n) {
}

function printPrimeNumber() {
}

function getNPrimes(n) {
}

function printNPrimes() {
}

window.onload = function() {
    greet();
    printPrimeNumber();
    printNPrimes();
};
