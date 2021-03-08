/* jshint esversion: 8 */
/* jshint browser: true */
"use strict;";

class LabView {
    constructor(model) {
        // Connect to the model and redraw the table on change
        model.subscribe(this.redrawTable.bind(this));
    }

    redrawTable(listOfPlayers, msg) {
        let tblBody = document.querySelector("#allPlayers > tbody");
        tblBody.innerHTML = "";

        for (let player of listOfPlayers) {
            let row = document.createElement("tr");
            let tdButtons = document.createElement("td");
            tdButtons.innerText = player.buttons;
            row.appendChild(tdButtons);
            
            let tdNation = document.createElement("td");
            tdNation.innerText = player.nationType;
            row.appendChild(tdNation);
            
            let tdTeam = document.createElement("td");
            tdTeam.innerText = player.teams;
            row.appendChild(tdTeam);

            tblBody.appendChild(row);
        }
    }
}