/* jshint esversion: 8 */
/* jshint node: true */
'use strict';

var urlParams = new URLSearchParams(window.location.search);

function greet() {
    const queryString= window.location.search;

    const urlParams= new URLSearchParams(queryString);
    const nameinfo = urlParams.get('name')||'student';
    let salutations= document.querySelector("h1");

    salutations.innerText =`Hello ${nameinfo}`;


}

function isPrime(n) {


    for (var p=2; p<n;p++ )
        if (n % p==0){

            return false;



        }
    return n>1;



}

function printPrimeNumber() {
    const queryString= window.location.search;

    const urlParams=new URLSearchParams(queryString);

    const n=urlParams.get('n')||330;



    if (isPrime(n)){


        document.querySelector("#primeinfo").innerText=`${n} is a prime number`;
    }
    else {
        document.querySelector("#primeinfo").innerText=`${n} is a prime number`;
    }
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
