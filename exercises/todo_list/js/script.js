/* jshint esversion: 6 */
/* jshint browser: true */
"use strict;";

var team = ["Aardvark", "Beaver", "Cheetah", "Dolphin", "Elephant", "Flamingo", "Giraffe", "Hippo"];
var priority = ["Low", "Normal", "Important", "Critical"];



function addTask() {
    let vals = [];
    let rowcolids = ["title", "assignedTo", "priority", "dueDate"];

    if (!document.querySelector("#newTask").checkValidity()) {
        let Warningtext = document.createElement("p");
        Warningtext.setAttribute("class", "alert alert-warning");
        Warningtext.innerText = "Please fill out all fields";
        document.querySelector("body").appendChild(Warningtext);
        return;
    }
    else{

    let textBox = document.querySelector("#title").value;
    vals.push(textBox);
    let selectionTeam = document.querySelector("#assignedTo").selectedOptions[0].value;
    vals.push(selectionTeam);
    let priority_func = document.querySelector("#priority").selectedOptions[0].value;
    vals.push(priority_func);
    let dueDate_deadline = document.querySelector("#dueDate").value;
    vals.push(dueDate_deadline);

    addRow(vals, document.getElementById("taskList"));
}
}


function addRow(valueList, parent) {
    let td = document.createElement("td");
    let row = document.createElement("tr");
    let cb = document.createElement("input");
    
    cb.setAttribute("id", "eliminate");
    cb.setAttribute("onclick", "removeRow()");
    cb.setAttribute("type", "checkbox");

    
    let checkeid = document.createElement("td");
    checkeid.appendChild(cb);
    row.appendChild(checkeid);
    for (let element_value of valueList){
        
        let td = document.createElement("td");
        td.innerHTML = element_value;
        if (element_value=="Low"){
            row.style.backgroundColor="green";
        }
        else if (element_value=="Normal"){
            row.style.backgroundColor="orange";
        }
        else if (element_value=="Important"){
            row.style.backgroundColor="yellow";
        }
        else if (element_value=="Critical"){
            row.style.backgroundColor="red";
        }
        row.appendChild(td);
        
    }

    parent.appendChild(row);
}


function removeRow() {
    $("#taskList input[type='checkbox']:checked").closest("tr").remove();
}

function populateSelect(selectId, sList) {
    let select_val = document.getElementById(selectId)
    for (let pull_down of sList) {
        let option_value= document.createElement("option");
        option_value.setAttribute("value", pull_down);
       
        option_value.innerHTML = pull_down;
        select_val .appendChild(option_value);
        }
    
}


window.onload = function() {
    populateSelect("assignedTo", team);
    populateSelect("priority", priority);
    
}