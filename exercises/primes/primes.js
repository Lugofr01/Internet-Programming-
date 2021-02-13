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

    var primes_in = [];

    var f=2;

    for (var p=0;p<n;p++){
        while(primes_in.length<n){

            if(isPrime(f)) primes_in.push(f);

            f++
        }
    }
    return primes_in
}

function printNPrimes() {
    const queryString = window.location.search;
    const  urlParams = new URLSearchParams(queryString);

    /* As seen on the youtube videos*/

    const n=urlParams.get('n')||330;
    /*chooses 330 as default or get something from the projected value n*/

    let thead=document.querySelector("thead");
    /*this retrievs the htm tag for table head*/

    thead.innerHTML=`First ${n} primes`;

        for (var q of getNPrimes(n)) {
            var tableinfo=document.querySelector("tbody");
            var row_next=tableinfo.insertRow();
            row_next.innerText=`${q}`;




        }
    
    
}

window.onload = function() {
    greet();
    printPrimeNumber();
    printNPrimes();
};
