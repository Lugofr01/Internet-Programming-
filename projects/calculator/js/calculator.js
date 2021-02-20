/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
'use strict';

var screen;


function enterDigit(digit) {
    if (screen.innerHTML == "0") {
        screen.innerHTML = `${digit}`;
    }
    else{
        screen.innerHTML = screen.innerHTML + `${digit}`
        
    }
}

function clear_screen() {
    screen.innerHTML= `${"0"}`;
}

function eval_expr() {
    let operation_eval = (screen.innerHTML.match(/\+/g) || []).length;
    if (operation_eval>1){
        screen.innerHTML= "ERROR";


    }
    else{
        let a = screen.innerHTML
        let f = String(a)
        let u = eval(f)
        document.querySelector("#result").innerHTML=`${u}`

    }        
}

function enterOp(operation) {
    screen.innerHTML = screen.innerHTML + `${operation}`
}

window.onload = function () {
    screen = document.querySelector("#result");
    screen.innerHTML = "0";
};
