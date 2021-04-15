/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

const BASE_URL ="https://localhost:5000/api/v1/jokes";

const lang=["en","es","de"];
const cat=["neutral","chuck","all"]; 

async function getJokes(){
    
    var lng =document.getElementById("selLang").value;
    var num =document.getElementById("selNum").value;
    var cag=document.getElementById("selCat").value;
    var Jokeid=document.getElementById("jokeID").value;
    if (Jokeid){
        jokes= await fetch(`${BASE_URL}/${lng}/${cag}/${num}/${Jokeid}`)
    .then(response => response.json());
    }
   
    
    }
}
