/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';
async function get_individual(num, all_numbers) {
    all_numbers.innerHTML="";
    for (let x=0; x<3; x++){
        let position=0;
        if (x===0){
            position=num-1;
        }
        else if (x===1) {
            position=num;
            
        } else {
            position=num+1;
           
        }
        let number = await fetch(`http://numbersapi.com/${position}?json`)
        .then(response => response.json());
        let firstLine=document.createElement("div");
        let firstd=document.createElement("div");
        let secondd=document.createElement("div");
        firstLine.classList.add("content");
        firstd.classList.add("namba");
        secondd.classList.add("kuhusu");
        firstd.innerHTML=number.number;
        secondd.innerHTML=number.text;
        firstLine.appendChild(firstd);
        firstLine.appendChild(secondd);
        all_numbers.appendChild(firstLine);
            
    }
}

async function get_batch(num, all_numbers) {
    all_numbers.innerHTML="";
    let number = await fetch(`http://numbersapi.com/${position-1}..${position+1}?json`)
     .then(response => response.json());
    for (let item in number){
        let line=document.createElement("div");
        let div1=document.createElement("div");
        let div2=document.createElement("div");
        line.classList.add("content");
        div1.classList.add("namba");
        div2.classList.add("kuhusu");
        div1.innerHTML=item;
        div2.innerHTML=number[item];
        line.appendChild(div1);
        line.appendChild(div2);
        all_numbers.appendChild(line);
    }
}

async function clickedon() {
    let num = parseInt(document.querySelector('#number').value);
    let all_numbers = document.querySelector('#number_info');
    if (document.querySelector('#batch').checked) {
        get_batch(num, all_numbers);
    } else {
        get_individual(num, all_numbers);
    }
}