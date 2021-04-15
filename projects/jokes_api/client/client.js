/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

const BASE_URL ="http://localhost:5000/api/v1/jokes";



async function getJokes(){
    
    var lng =document.getElementById("selLang").value;
    var num =document.getElementById("selNum").value;
    var cag=document.getElementById("selCat").value;
    var Jokeid=document.getElementById("jokeID").value;
    var jokes= await fetch(`${BASE_URL}/${lng}/${cag}/${num}`).then(response => response.json());
    console.log(jokes)
    let row = document.querySelector("#jokes")
    for (let idx in jokes){
    let td = document.createElement("div");
    td.innerHTML = jokes[idx];
    row.appendChild(td);
    }


}
    