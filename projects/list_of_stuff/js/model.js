/* jshint esversion: 8 */
/* jshint browser: true */
"use strict;";

class CPlayer {
    constructor(nButtons, cType, teams) {
        this._buttons  = nButtons;
        this._connection = cType;
        this._teams = teams;
    }

    get buttons() {
        return this._buttons;
    }

    get nationType() {
        return this._connection;
    }

    get teams() {
        return this._teams;
    }

    set teams(newValue) {
        this._teams = newValue;
    }
}

class Subject {
    constructor() {
        this.handlers = [];
    }
    subscribe(func) {
        this.handlers.push(func);
    }

    unsubscribe(func) {
        this.handlers = this.handlers.filter(item => item !== func);
    }

    publish(msg, obj) {
        let scope = obj || window;
        for (let func of this.handlers) {
            func(scope, msg);
        }
    }
}

class ComputerLab extends Subject {
    constructor(labSize) {
        super();
        this._maxSize = labSize;
        this._lab = []; 
    }

    add(mouse) {
        if (this._lab.length < this._maxSize) {
            this._lab.push(mouse);
            this.publish("New mouse has been added", this);
        }
    }

    remove(mouse) {

    }

    [Symbol.iterator]() {
        let idx = -1;
        return {
            next: () => ({value: this._lab[++idx], done: !(idx in this._lab)})
        };
    }
}
