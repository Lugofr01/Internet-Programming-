/* jshint esversion: 8 */
/* jshint browser: true */
"use strict;";

const nationTypes = [" Brazil", "Japan", "France", "Portugal","Brazil","Argentina","Russia","Ukraine","England","USA","Germany"];
const teams = ["Chelsea", "Barcelona", "Juventus", "Manchester United", "Liverpool", "Dortmund", "Bayern FC","Manchester City"]

var myLabModel = new ComputerLab(10);
var myLabView = new LabView(myLabModel);

function populateSelect(selectElement, options) {
    for (let opt of options) {
        let anOption = document.createElement("option");
        anOption.setAttribute("value", opt);
        anOption.innerHTML = opt;
        selectElement.appendChild(anOption);
    }

}

function addPlayer() {
    if (!document.querySelector("#newPlayer").checkValidity()) {
        let warning = document.createElement("p");
        warning.setAttribute("class", "alert alert-warning");
        warning.innerText = "Enter all values please";
        document.querySelector("body").appendChild(warning);
        return;
    }

    let buttons = document.querySelector("#playerButtons").value;
    let nationType = document.querySelector("#playerNation").selectedOptions[0].value;
    let team = document.querySelector("#playerTeam").selectedOptions[0].value;

    // Add to the model
    let newPlayer = new CPlayer(buttons, nationType, team);
    myLabModel.add(newPlayer);
}

function savePlayer() {
    localStorage.setItem("local_storage", JSON.stringify(myLabModel._lab));
}

function removePlayer() {
    $("#allPlayers tbody tr").remove(); 
   localStorage.removeItem("local_storage");
   myLabModel.removeAll();

}


function loadPlayer(){
    console.log("fuck")
    let play_list=localStorage.getItem("local_storage");
    if (play_list){
        play_list=JSON.parse(play_list);
        let pleague = document.querySelector("#allPlayers > tbody");
        pleague.innerHTML = "";
        

        for (let item of play_list){
            let row = document.createElement("tr");
            let cb = document.createElement("input");
            cb.setAttribute("type","checkbox");
            let check_table = document.createElement("td");
            check_table.appendChild(cb);
            row.appendChild(check_table);
            for(let index in item){
                let pdata = document.createElement("td");
                pdata.innerHTML=item[index];
                row.appendChild(pdata);
            }
        pleague.appendChild(row);
        document.querySelector("#allPlayers").appendChild(pleague); 

        }
        

    }
    
}


window.onload = function() {
    populateSelect(document.querySelector("#playerNation"), nationTypes);
    populateSelect(document.querySelector("#playerTeam"),teams);
};
